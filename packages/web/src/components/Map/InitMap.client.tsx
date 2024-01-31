'use client';

import { useEffect } from 'react';

export default function InitMap() {
  function initMap() {}

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.initMap = initMap;
  }, []);

  return <div id="map"></div>;
}
