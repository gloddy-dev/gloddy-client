'use client';

import { useEffect, useState } from 'react';

export default function usePlaceDetails(
  map: google.maps.Map | null,
  requests: google.maps.places.PlaceDetailsRequest
) {
  const [place, setPlace] = useState<google.maps.places.PlaceResult | null>(null);

  useEffect(() => {
    if (map === null || typeof window === 'undefined') return;

    const service = new google.maps.places.PlacesService(map);
    service.getDetails(requests, (result) => {
      setPlace(result);
    });
  }, [map, requests.placeId]);

  return { place };
}
