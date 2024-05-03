import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

import { GOOGLE_API_KEY } from '@/constants';
import { LatLng } from '@/types';

interface MapViewProps {
  latLng: LatLng;
}

export default function MapView({ latLng }: MapViewProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY as string,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '200px', borderRadius: '8px' }}
      center={{
        lat: latLng?.lat,
        lng: latLng?.lng,
      }}
      zoom={15}
      options={{
        disableDefaultUI: true,
        keyboardShortcuts: false,
      }}
    >
      <MarkerF position={latLng} />
    </GoogleMap>
  ) : (
    <></>
  );
}
