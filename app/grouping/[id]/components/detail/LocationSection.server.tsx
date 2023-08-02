'use client';

import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { GroupResponse } from '@/apis/groups/type';
import { Spacing } from '@/components/common/Spacing';
import { KAKAO_SDK_URL } from '@/constants';

interface LocationSectionProps
  extends Pick<GroupResponse, 'place' | 'placeLatitude' | 'placeLongitude'> {}

export default function LocationSection({
  place,
  placeLatitude,
  placeLongitude,
}: LocationSectionProps) {
  return (
    <section>
      <h2 className="text-14">모임 위치</h2>
      <Spacing size={10} />
      <div className="rounded-8 bg-gray6 p-16">
        <Spacing size={8} />
        <p className="text-14">{place}</p>
        <div className="h-200">
          <Script type="text/javascript" src={KAKAO_SDK_URL} strategy="beforeInteractive" />
          <Map
            center={{
              lat: +placeLatitude,
              lng: +placeLongitude,
            }}
            style={{
              width: '100%',
              height: '100%',
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
        </div>
      </div>
    </section>
  );
}
