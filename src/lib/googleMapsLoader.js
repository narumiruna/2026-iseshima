let mapsLoaderPromise;

export function loadGoogleMapsApi({ apiKey, language = 'zh-TW', region = 'JP' }) {
  if (!apiKey) {
    return Promise.reject(new Error('GOOGLE_MAPS_API_KEY 尚未設定'));
  }

  if (window.google?.maps) {
    return Promise.resolve(window.google.maps);
  }

  if (mapsLoaderPromise) {
    return mapsLoaderPromise;
  }

  mapsLoaderPromise = new Promise((resolve, reject) => {
    const callbackName = '__onGoogleMapsReady';
    window[callbackName] = () => {
      delete window[callbackName];
      resolve(window.google.maps);
    };

    const script = document.createElement('script');
    const params = new URLSearchParams({
      key: apiKey,
      callback: callbackName,
      language,
      region,
    });

    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      delete window[callbackName];
      reject(new Error('Google Maps JavaScript API 載入失敗'));
    };

    document.head.appendChild(script);
  });

  return mapsLoaderPromise;
}
