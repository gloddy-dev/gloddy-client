'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import { Control, useController } from 'react-hook-form';

import LocationItem from './LocationItem.client';
import { CreateGroupContextValue } from '../type';

import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';
import { MapView } from '@/components/MapView';
import { BottomSheet } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { TextField } from '@/components/TextField';
import { GOOGLE_API_KEY } from '@/constants';
import { LatLng } from '@/types';

interface LocationBottomSheetProps {
  control: Control<CreateGroupContextValue>;
  onClose: () => void;
  isOpen: boolean;
}

export default function LocationBottomSheet({
  control,
  onClose,
  isOpen,
}: LocationBottomSheetProps) {
  const { lng } = useParams() as { lng: string };
  const { t } = useTranslation('grouping');

  const [placeValue, setPlaceValue] = useState<string>('');

  const { placesService, placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    usePlacesService({
      apiKey: GOOGLE_API_KEY,
      language: lng,
    });

  const { field, fieldState } = useController({
    name: 'place',
    control,
    rules: {
      required: true,
    },
  });

  const [latLng, setLatLng] = useState<LatLng | undefined>(
    field.value.latitude && field.value.longitude
      ? {
          lat: field.value.latitude,
          lng: field.value.longitude,
        }
      : undefined
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange({
      id: '',
      name: '',
      address: '',
      latitude: undefined,
      longitude: undefined,
    });
    setPlaceValue(e.target.value);
    getPlacePredictions({ input: e.target.value });
    setLatLng(undefined);
  };

  const handleSelect = async (place: google.maps.places.AutocompletePrediction) => {
    if (!placesService) return;

    placesService?.getDetails({ placeId: place.place_id }, (details) => {
      const lat = details?.geometry?.location?.lat();
      const lng = details?.geometry?.location?.lng();

      if (lat && lng) {
        setLatLng({ lat, lng });
        field.onChange({
          id: place.place_id,
          name: place.structured_formatting.main_text,
          address: place.structured_formatting.secondary_text,
          latitude: lat,
          longitude: lng,
        });
      }
    });

    setPlaceValue(place.structured_formatting.main_text);
  };

  return (
    <BottomSheet
      snapPoints={[550, 0]}
      onClose={onClose}
      title={t('create.place.label')}
      isTapOutsideToClose
      disableDrag
      isOpen={isOpen}
    >
      <TextField
        as="input"
        placeholder={t('create.place.placeholder')}
        leftIcon={<Icon id="24-search" width={24} height={24} />}
        value={placeValue}
        onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
      />
      <Spacing size={20} />
      {fieldState.isDirty && (
        <>
          <div className="aspect-video">{latLng && <MapView latLng={latLng} />}</div>
          <Spacing size={20} />
          <Flex direction="column" className="rounded-8 bg-divider gap-2 p-16">
            <p className="text-subtitle-2 truncate">{field.value.name}</p>
            <p className="text-paragraph-2 text-sign-secondary truncate">{field.value.address}</p>
          </Flex>
        </>
      )}
      <div className="scrollbar h-full overflow-hidden overflow-y-scroll">
        {!isPlacePredictionsLoading &&
          (placePredictions.length === 0 && placeValue !== '' ? (
            <p className="text-sign-tertiary text-center">검색 결과가 없습니다.</p>
          ) : (
            <ItemList
              data={placePredictions}
              renderItem={(place) => <LocationItem place={place} onSelect={handleSelect} />}
              hasDivider={false}
              className="py-8"
            />
          ))}
      </div>

      <ButtonGroup>
        <Button onClick={onClose} disabled={!fieldState.isDirty}>
          {t('create.continue')}
        </Button>
      </ButtonGroup>
    </BottomSheet>
  );
}
