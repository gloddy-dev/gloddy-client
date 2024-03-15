import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { LatLng } from 'use-places-autocomplete';

import { GOOGLE_API_KEY } from '@/constants';

interface MapViewProps {
  latLng?: LatLng;
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
        lat: latLng?.lat || 37.566,
        lng: latLng?.lng || 126.978,
      }}
      zoom={15}
      options={{
        disableDefaultUI: true,
        keyboardShortcuts: false,
      }}
    >
      {latLng && <Marker position={latLng} />}
    </GoogleMap>
  ) : (
    <></>
  );
}
