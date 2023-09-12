'use client';

import { useEffect, useState } from 'react';

export default function usePlaceDetails(requests: google.maps.places.PlaceDetailsRequest) {
  const [place, setPlace] = useState<google.maps.places.PlaceResult | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails(requests, (result) => {
      setPlace(result);
    });
  }, [requests.placeId]);

  return { place };
}
