'use client';

import { GroupDetailResponse } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Spacing } from '@/components/Spacing';
import usePlaceDetails from '@/hooks/usePlaceDetails';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useParams } from 'next/navigation';

interface LocationSectionProps extends GroupDetailResponse {}

export default function LocationSection({
  placeName,
  placeLatitude,
  placeLongitude,
  placeAddress,
  placeId,
}: LocationSectionProps) {
  const { lng } = useParams() as { lng: string };
  const { t } = useTranslation('groupDetail');
  const { place } = usePlaceDetails({
    placeId,
    fields: ['name', 'formatted_address'],
    language: lng,
    region: 'KR',
  });

  if (typeof google === 'undefined') return null;

  return (
    <section className="p-20 pb-8" onClick={() => window.open()}>
      <h2 className="pl-4 text-subtitle-3 text-sign-secondary">{t('details.place')}</h2>
      <Spacing size={4} />
      <div className="relative overflow-hidden rounded-8 bg-divider">
        <div className="aspect-video w-full">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{ lat: +placeLatitude, lng: +placeLongitude }}
            zoom={14}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
            }}
          >
            <Marker position={{ lat: +placeLatitude, lng: +placeLongitude }} />
          </GoogleMap>
        </div>

        <div className="p-16">
          <p>
            <span className="text-subtitle-2">{place?.name || placeName}</span>
            {/* <span className="pl-4 text-caption text-sign-sub">호프, 요리주점</span> */}
          </p>
          <Spacing size={2} />
          <p className="text-paragraph-2 text-sign-secondary">
            {place?.formatted_address || placeAddress}
          </p>
        </div>
      </div>
    </section>
  );
}
