'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';

import { GroupDetailResponse } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import MapView from '@/components/MapView/MapView';
import { Spacing } from '@/components/Spacing';
import { GOOGLE_API_KEY } from '@/constants';
import usePlaceDetails from '@/hooks/usePlaceDetails';

interface LocationSectionProps extends GroupDetailResponse {}

interface PlaceDetail {
  url?: string;
  name?: string;
  formattedAddress?: string;
}

export default function LocationSection({
  placeName,
  placeLatitude,
  placeLongitude,
  placeAddress,
  placeId,
}: LocationSectionProps) {
  const { lng } = useParams() as { lng: string };
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
