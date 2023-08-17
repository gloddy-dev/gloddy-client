'use client';

import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';
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
      <h2 className="pl-4 text-subtitle-3 text-sign-secondary">모임 위치</h2>
      <Spacing size={4} />
      <div className="relative rounded-8 bg-gray6">
        <Image
          src="/icons/24/copy.svg"
          alt="copy"
          width={24}
          height={24}
          className="absolute right-12 top-12 z-10"
          onClick={() => console.log('복사')}
        />
        <Map
          center={{
            lat: +placeLatitude,
            lng: +placeLongitude,
          }}
          className="aspect-video rounded-t-8"
          level={4}
          draggable={false}
        >
          <MapMarker
            position={{
              lat: +placeLatitude,
              lng: +placeLongitude,
            }}
          />
        </Map>
        <div className="p-16">
          <p>
            <span className="text-subtitle-2 text-sign-primary">경희회관</span>{' '}
            <span className="text-caption text-sign-sub">호프, 요리주점</span>
          </p>
          <Spacing size={2} />
          <p className="text-paragraph-2 text-sign-secondary">{place}</p>
        </div>
      </div>
    </section>
  );
}
