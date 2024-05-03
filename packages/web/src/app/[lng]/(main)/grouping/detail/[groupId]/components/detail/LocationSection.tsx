'use client';

import dynamic from 'next/dynamic';

import { GroupDetailResponse } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Spacing } from '@/components/Spacing';

const MapView = dynamic(() => import('@/components/MapView/MapView'));

interface LocationSectionProps extends GroupDetailResponse {}

export default function LocationSection({
  placeName,
  placeLatitude,
  placeLongitude,
  placeAddress,
}: LocationSectionProps) {
  const { t } = useTranslation('groupDetail');

  return (
    <section className="p-20 pb-8">
      <h2 className="text-subtitle-3 text-sign-secondary pl-4">{t('details.place')}</h2>
      <Spacing size={4} />
      <div className="rounded-8 bg-divider relative overflow-hidden">
        <div className="absolute left-0 top-0 z-[2] aspect-video w-full cursor-pointer opacity-0" />
        <div className="aspect-video w-full">
          <MapView latLng={{ lat: Number(placeLatitude), lng: Number(placeLongitude) }} />
        </div>

        <div className="p-16">
          <p>
            <span className="text-subtitle-2">{placeName}</span>
          </p>
          <Spacing size={2} />
          <p className="text-paragraph-2 text-sign-secondary">{placeAddress}</p>
        </div>
      </div>
    </section>
  );
}
