import { useEffect, useMemo, useRef, useState } from 'react';

import { loadGoogleMapsApi } from '../lib/googleMapsLoader';

const GEOCODE_CACHE_KEY = 'trip-map-geocode-cache-v1';

function toLatLngLiteral(result) {
  return {
    lat: result.geometry.location.lat(),
    lng: result.geometry.location.lng(),
  };
}

function buildInfoHtml(place, order) {
  const parts = [`<strong>${order}. ${place.name}</strong>`];
  if (place.time) parts.push(`<div>時間：${place.time}</div>`);
  if (place.note) parts.push(`<div>備註：${place.note}</div>`);
  parts.push(`<div style="font-size:12px;color:#4f5d75;">${place.address}</div>`);
  return `<div style="line-height:1.5;max-width:260px;">${parts.join('')}</div>`;
}

function extractRouteErrorCode(error) {
  const text = String(error?.message || error || '');
  const match = text.match(
    /(ZERO_RESULTS|NOT_FOUND|OVER_QUERY_LIMIT|REQUEST_DENIED|INVALID_REQUEST|UNKNOWN_ERROR)/,
  );
  return match?.[1] ?? 'UNKNOWN_ERROR';
}

function routeErrorHint(code) {
  if (code === 'REQUEST_DENIED') {
    return 'API 被拒絕。請確認已啟用 Directions API 且 key restriction 正確。';
  }
  if (code === 'ZERO_RESULTS') {
    return '查無可用大眾運輸路線（此時段或此路段可能無班次）。';
  }
  if (code === 'OVER_QUERY_LIMIT') {
    return '已達 API 查詢上限，請稍後再試。';
  }
  if (code === 'NOT_FOUND') {
    return '起點或終點座標/地址無法辨識。';
  }
  if (code === 'INVALID_REQUEST') {
    return '路線請求參數無效。';
  }
  return '路線服務暫時不可用。';
}

export function MapCanvas({ day, focusRequest, routeMode }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const geocoderRef = useRef(null);
  const infoWindowRef = useRef(null);
  const markersRef = useRef([]);
  const directionsServiceRef = useRef(null);
  const directionsRendererRef = useRef(null);
  const transitRenderersRef = useRef([]);
  const polylineRef = useRef(null);
  const cacheRef = useRef(new Map());

  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('正在初始化地圖...');
  const [transitSegments, setTransitSegments] = useState([]);

  const apiKey = useMemo(
    () => import.meta.env.VITE_GOOGLE_MAPS_API_KEY || import.meta.env.GOOGLE_MAPS_API_KEY,
    [],
  );

  function clearOverlays() {
    markersRef.current.forEach((entry) => entry.marker.setMap(null));
    markersRef.current = [];

    if (directionsRendererRef.current) {
      directionsRendererRef.current.set('directions', null);
    }

    transitRenderersRef.current.forEach((renderer) => renderer.setMap(null));
    transitRenderersRef.current = [];

    if (polylineRef.current) {
      polylineRef.current.setMap(null);
      polylineRef.current = null;
    }

    setTransitSegments([]);
  }

  function stripHtml(html) {
    return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  }

  function formatTransitStep(step) {
    if (step.travel_mode !== 'TRANSIT') {
      return `步行：${stripHtml(step.instructions ?? '')}（約 ${step.duration?.text ?? '?'}）`;
    }

    const lineName =
      step.transit?.line?.short_name ||
      step.transit?.line?.name ||
      '大眾運輸';
    const vehicle = step.transit?.line?.vehicle?.name || '交通工具';
    const departureStop = step.transit?.departure_stop?.name || '上車站';
    const arrivalStop = step.transit?.arrival_stop?.name || '下車站';
    const stopCount = step.transit?.num_stops;

    return `${vehicle} ${lineName}：${departureStop} → ${arrivalStop}${
      stopCount ? `（${stopCount} 站）` : ''
    }（約 ${step.duration?.text ?? '?'}）`;
  }

  function buildTransitDepartureTime(segmentIndex) {
    const base = new Date(`${day.date}T09:00:00+09:00`);
    base.setMinutes(base.getMinutes() + segmentIndex * 90);
    return base;
  }

  function upsertCache(address, location) {
    cacheRef.current.set(address, location);
    const plainObject = Object.fromEntries(cacheRef.current.entries());
    localStorage.setItem(GEOCODE_CACHE_KEY, JSON.stringify(plainObject));
  }

  async function geocodeAddress(address) {
    const cached = cacheRef.current.get(address);
    if (cached) {
      return cached;
    }

    return new Promise((resolve, reject) => {
      geocoderRef.current.geocode({ address, region: 'jp' }, (results, statusCode) => {
        if (statusCode === 'OK' && results?.[0]) {
          const location = toLatLngLiteral(results[0]);
          upsertCache(address, location);
          resolve(location);
          return;
        }

        reject(new Error(`${address} Geocoding 失敗：${statusCode}`));
      });
    });
  }

  async function resolveDayPoints() {
    const resolved = [];

    for (let i = 0; i < day.places.length; i += 1) {
      const place = day.places[i];
      try {
        const point =
          typeof place.lat === 'number' && typeof place.lng === 'number'
            ? { lat: place.lat, lng: place.lng }
            : await geocodeAddress(place.address);
        resolved.push({ ...place, location: point, index: i });
      } catch (error) {
        console.warn(error);
      }
    }

    return resolved;
  }

  async function drawDrivingRoute(points) {
    if (points.length < 2) {
      return;
    }

    const maps = window.google.maps;
    const origin = points[0].location;
    const destination = points[points.length - 1].location;
    const waypoints = points.slice(1, -1).map((point) => ({
      location: point.location,
      stopover: true,
    }));

    try {
      const routeResult = await directionsServiceRef.current.route({
        origin,
        destination,
        waypoints,
        travelMode: maps.TravelMode.DRIVING,
        optimizeWaypoints: false,
      });

      directionsRendererRef.current.setDirections(routeResult);
      return true;
    } catch {
      return false;
    }
  }

  async function drawTransitRoute(points) {
    if (points.length < 2) {
      setTransitSegments([]);
      return true;
    }

    const maps = window.google.maps;
    const segmentCards = [];
    let hasTransitRoute = false;

    for (let i = 0; i < points.length - 1; i += 1) {
      const segmentId = `${points[i].name}-${points[i + 1].name}-${i}`;
      try {
        const routeResult = await directionsServiceRef.current.route({
          origin: points[i].location,
          destination: points[i + 1].location,
          travelMode: maps.TravelMode.TRANSIT,
          transitOptions: {
            departureTime: buildTransitDepartureTime(i),
          },
        });

        const renderer = new maps.DirectionsRenderer({
          map: mapRef.current,
          suppressMarkers: true,
          preserveViewport: true,
          polylineOptions: {
            strokeColor: '#0f8b8d',
            strokeWeight: 5,
            strokeOpacity: 0.8,
          },
        });
        renderer.setDirections(routeResult);
        transitRenderersRef.current.push(renderer);

        const leg = routeResult.routes?.[0]?.legs?.[0];
        const steps = (leg?.steps || []).map(formatTransitStep);
        segmentCards.push({
          id: segmentId,
          from: points[i].name,
          to: points[i + 1].name,
          duration: leg?.duration?.text || '?',
          distance: leg?.distance?.text || '?',
          steps: steps.length > 0 ? steps : ['無法解析搭乘步驟'],
          ok: true,
        });
        hasTransitRoute = true;
      } catch (error) {
        const code = extractRouteErrorCode(error);
        segmentCards.push({
          id: segmentId,
          from: points[i].name,
          to: points[i + 1].name,
          duration: '-',
          distance: '-',
          steps: [`${routeErrorHint(code)}（${code}）`],
          ok: false,
        });
      }
    }

    setTransitSegments(segmentCards);
    return hasTransitRoute;
  }

  function drawPolylineFallback(points) {
    const maps = window.google.maps;
    const routePath = points.map((point) => point.location);
    polylineRef.current = new maps.Polyline({
      path: routePath,
      geodesic: true,
      strokeColor: '#fe5d26',
      strokeOpacity: 0.85,
      strokeWeight: 4,
    });
    polylineRef.current.setMap(mapRef.current);
  }

  async function renderDay() {
    if (!mapRef.current) {
      return;
    }

    clearOverlays();
    setStatus('loading');
    setMessage('正在整理當日景點與路線...');

    const maps = window.google.maps;
    const points = await resolveDayPoints();

    if (points.length === 0) {
      setStatus('error');
      setMessage('本日景點無法解析座標，請確認地址文字。');
      return;
    }

    const bounds = new maps.LatLngBounds();

    points.forEach((point, order) => {
      const marker = new maps.Marker({
        map: mapRef.current,
        position: point.location,
        title: point.name,
        label: String(order + 1),
      });

      marker.addListener('click', () => {
        infoWindowRef.current.setContent(buildInfoHtml(point, order + 1));
        infoWindowRef.current.open({ map: mapRef.current, anchor: marker });
      });

      markersRef.current.push({ marker, point, order });
      bounds.extend(point.location);
    });

    mapRef.current.fitBounds(bounds, 70);
    let routeOk = false;
    if (routeMode === 'TRANSIT') {
      try {
        routeOk = await drawTransitRoute(points);
      } catch {
        routeOk = false;
      }
    } else {
      routeOk = await drawDrivingRoute(points);
    }

    if (!routeOk) {
      drawPolylineFallback(points);
    }

    setStatus('ready');
    setMessage('');
  }

  function focusMarkerByIndex(index) {
    const target = markersRef.current.find((entry) => entry.point.index === index);
    if (!target) {
      return;
    }

    mapRef.current.panTo(target.point.location);
    mapRef.current.setZoom(14);
    infoWindowRef.current.setContent(buildInfoHtml(target.point, target.order + 1));
    infoWindowRef.current.open({ map: mapRef.current, anchor: target.marker });
  }

  useEffect(() => {
    const rawCache = localStorage.getItem(GEOCODE_CACHE_KEY);
    if (!rawCache) {
      return;
    }

    try {
      const parsed = JSON.parse(rawCache);
      Object.entries(parsed).forEach(([key, value]) => {
        if (typeof value?.lat === 'number' && typeof value?.lng === 'number') {
          cacheRef.current.set(key, value);
        }
      });
    } catch {
      localStorage.removeItem(GEOCODE_CACHE_KEY);
    }
  }, []);

  useEffect(() => {
    let alive = true;

    async function bootMap() {
      try {
        const maps = await loadGoogleMapsApi({ apiKey, language: 'zh-TW', region: 'JP' });
        if (!alive) {
          return;
        }

        mapRef.current = new maps.Map(containerRef.current, {
          center: { lat: 34.53, lng: 136.74 },
          zoom: 10,
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        });

        geocoderRef.current = new maps.Geocoder();
        infoWindowRef.current = new maps.InfoWindow();
        directionsServiceRef.current = new maps.DirectionsService();
        directionsRendererRef.current = new maps.DirectionsRenderer({
          map: mapRef.current,
          suppressMarkers: true,
          preserveViewport: true,
          polylineOptions: {
            strokeColor: '#0f4c5c',
            strokeWeight: 5,
            strokeOpacity: 0.78,
          },
        });

        renderDay();
      } catch (error) {
        if (!alive) {
          return;
        }
        setStatus('error');
        setMessage(error.message || '地圖初始化失敗');
      }
    }

    bootMap();

    return () => {
      alive = false;
      clearOverlays();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }
    renderDay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day, routeMode]);

  useEffect(() => {
    if (!focusRequest || focusRequest.dayId !== day.id || status !== 'ready') {
      return;
    }
    focusMarkerByIndex(focusRequest.placeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusRequest, day.id, status]);

  return (
    <div className="map-wrap">
      <div className="map-shell">
        <div ref={containerRef} className="map-canvas" />
        {status !== 'ready' ? <div className={`map-state ${status}`}>{message}</div> : null}
      </div>
      {routeMode === 'TRANSIT' ? (
        <section className="transit-panel" aria-label="大眾運輸搭乘步驟">
          <h3>大眾運輸搭乘建議</h3>
          {transitSegments.length > 0 ? (
            transitSegments.map((segment) => (
              <article key={segment.id} className="transit-segment">
                <header>
                  <strong>
                    {segment.from} → {segment.to}
                  </strong>
                  <span>
                    約 {segment.duration} / {segment.distance}
                  </span>
                </header>
                <ol>
                  {segment.steps.map((step, index) => (
                    <li key={`${segment.id}-${index}`}>{step}</li>
                  ))}
                </ol>
              </article>
            ))
          ) : (
            <p className="transit-empty">正在查詢大眾運輸路線…</p>
          )}
        </section>
      ) : null}
    </div>
  );
}
