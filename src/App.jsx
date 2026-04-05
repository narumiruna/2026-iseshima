import { useMemo, useState } from 'react';

import { DaySelector } from './components/DaySelector';
import { MapCanvas } from './components/MapCanvas';
import { PlaceList } from './components/PlaceList';
import { trip } from './data/tripData';

function formatLongDate(dateString) {
  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
    timeZone: 'Asia/Tokyo',
  }).format(new Date(`${dateString}T00:00:00+09:00`));
}

export default function App() {
  const defaultDayId = trip.days.find((day) => day.id === 'd3')?.id ?? trip.days[0].id;
  const [activeDayId, setActiveDayId] = useState(defaultDayId);
  const [focusRequest, setFocusRequest] = useState(null);
  const [routeMode, setRouteMode] = useState('DRIVING');

  const activeDay = useMemo(
    () => trip.days.find((day) => day.id === activeDayId) ?? trip.days[0],
    [activeDayId],
  );

  function handleSelectDay(dayId) {
    setActiveDayId(dayId);
    setFocusRequest(null);
  }

  function handleFocusPlace(placeIndex) {
    setFocusRequest({ dayId: activeDay.id, placeIndex, ts: Date.now() });
  }

  return (
    <div className="app-root">
      <header className="hero">
        <p className="hero-kicker">Mie · Japan</p>
        <h1>{trip.title}</h1>
        <p className="hero-subtitle">{formatLongDate(trip.days[0].date)} - {formatLongDate(trip.days[trip.days.length - 1].date)}</p>
      </header>

      <main className="planner-layout">
        <section className="planner-control" aria-label="每日行程控制面板">
          <div className="route-mode-box" role="group" aria-label="路線模式">
            <button
              type="button"
              className={`route-mode-btn${routeMode === 'DRIVING' ? ' active' : ''}`}
              onClick={() => setRouteMode('DRIVING')}
            >
              自駕
            </button>
            <button
              type="button"
              className={`route-mode-btn${routeMode === 'TRANSIT' ? ' active' : ''}`}
              onClick={() => setRouteMode('TRANSIT')}
            >
              大眾運輸
            </button>
          </div>
          <DaySelector days={trip.days} activeDayId={activeDay.id} onSelectDay={handleSelectDay} />
          <PlaceList day={activeDay} focusedIndex={focusRequest?.placeIndex ?? null} onFocusPlace={handleFocusPlace} />
        </section>

        <section className="planner-map" aria-label="每日路線地圖">
          <MapCanvas day={activeDay} focusRequest={focusRequest} routeMode={routeMode} />
        </section>
      </main>
    </div>
  );
}
