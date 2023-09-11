'use client';

import { useGetGroupDetail } from '@/apis/groups';
import { Spacing } from '@/components/Spacing';
import { GOOGLE_API_KEY } from '@/constants';
import { useNumberParams } from '@/hooks/useNumberParams';
import usePlaceDetails from '@/hooks/usePlaceDetails';
import { GoogleMap, Libraries, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';

const requests = {
  placeId: 'ChIJ59CDR6GofDURced1F1WLGQ8',
  fields: ['name', 'formatted_address'],
  language: 'ko',
  region: 'KR',
};

const libraries: Libraries = ['places'];

export default function LocationSection() {
  const { groupId } = useNumberParams<['groupId']>();
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { placeName, placeLatitude, placeLongitude, placeAddress, placeId } = groupDetailData;
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { place } = usePlaceDetails(map, requests);

  console.log(place);
  return (
    <section>
      <h2 className="pl-4 text-subtitle-3 text-sign-secondary">모임 위치</h2>
      <Spacing size={4} />
      <div className="relative overflow-hidden rounded-8 bg-divider">
        <div className="aspect-video w-full">
          <LoadScript googleMapsApiKey={GOOGLE_API_KEY as string} nonce="map" libraries={libraries}>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={{ lat: +placeLatitude, lng: +placeLongitude }}
              zoom={14}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
              }}
              onLoad={(map) => setMap(map)}
            >
              <Marker position={{ lat: +placeLatitude, lng: +placeLongitude }} />
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="p-16">
          <p>
            <span className="text-subtitle-2">{placeName}</span>
            {/* <span className="pl-4 text-caption text-sign-sub">호프, 요리주점</span> */}
          </p>
          <Spacing size={2} />
          <p className="text-paragraph-2 text-sign-secondary">{placeAddress}</p>
        </div>
      </div>
    </section>
  );
}
