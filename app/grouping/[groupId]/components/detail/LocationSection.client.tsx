'use client';

import { Spacing } from '@/components/common/Spacing';
import { KAKAO_SDK_URL } from '@/constants';
import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import type { GroupDetailResponse } from '@/apis/groups/type';

interface LocationSectionProps
  extends Pick<GroupDetailResponse, 'place' | 'placeLatitude' | 'placeLongitude'> {}

export default function LocationSection({
  place,
  placeLatitude = 37.589039,
  placeLongitude = 127.057761,
}: LocationSectionProps) {
  return (
    <section>
      <h2 className="text-14">모임 위치</h2>
      <Spacing size={10} />
      <div className="rounded-8 bg-gray6 p-16">
        <Map
          center={{
            lat: +placeLatitude,
            lng: +placeLongitude,
          }}
          style={{
            width: '100%',
            height: '200px',
          }}
          level={4}
        >
          <MapMarker
            position={{
              lat: +placeLatitude,
              lng: +placeLongitude,
            }}
          />
        </Map>
        <Spacing size={8} />
        <p className="text-14">{place}</p>
      </div>
    </section>
  );
}
