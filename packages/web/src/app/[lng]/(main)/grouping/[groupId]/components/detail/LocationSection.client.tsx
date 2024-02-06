'use client';

import { GoogleMap, Marker } from '@react-google-maps/api';
import { useParams } from 'next/navigation';

import { GroupDetailResponse } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Spacing } from '@/components/Spacing';
import usePlaceDetails from '@/hooks/usePlaceDetails';

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
    fields: ['name', 'formatted_address', 'url'],
    language: lng,
    region: 'KR',
  });

  return (
    <section className="p-20 pb-8">
      <h2 className="text-subtitle-3 text-sign-secondary pl-4">{t('details.place')}</h2>
      <Spacing size={4} />
      <div className="rounded-8 bg-divider relative overflow-hidden">
        <div
          className="absolute left-0 top-0 z-[2] aspect-video w-full cursor-pointer opacity-0"
          onClick={() => place?.url && window.open(place?.url, '_blank')}
        />
        <div className="aspect-video w-full">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{ lat: +placeLatitude, lng: +placeLongitude }}
            zoom={14}
            options={{
              disableDefaultUI: true,
              zoomControl: false,
            }}
          >
            <Marker position={{ lat: +placeLatitude, lng: +placeLongitude }} />
          </GoogleMap>
        </div>

        <div className="p-16">
          <p>
            <span className="text-subtitle-2">{place?.name || placeName}</span>
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
