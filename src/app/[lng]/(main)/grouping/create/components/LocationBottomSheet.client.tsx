import LocationItem from './LocationItem.client';
import { CreateGroupContextValue } from '../type';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';
import { BottomSheet } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { TextField } from '@/components/TextField';
import { LatLng } from '@/types';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

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

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: 'initMap',
    requestOptions: {
      language: lng,
      region: 'KR',
    },
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
    setValue(e.target.value);
    setLatLng(undefined);
  };

  const handleSelect = async (place: google.maps.places.AutocompletePrediction) => {
    const geocode = await getGeocode({ address: place.description });
    const latLng = getLatLng(geocode[0]);
    setLatLng(latLng);
    field.onChange({
      id: place.place_id,
      name: place.structured_formatting.main_text,
      address: place.structured_formatting.secondary_text,
      latitude: latLng.lat,
      longitude: latLng.lng,
    });
    setValue(place.structured_formatting.main_text, false);
    clearSuggestions();
  };

  useEffect(() => {
    if (field.value.name) {
      setValue(field.value.name, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        value={value}
        onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
        readOnly={!ready}
      />
      <Spacing size={20} />
      {fieldState.isDirty && (
        <>
          <div className="aspect-video">
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
          </div>
          <Spacing size={20} />
          <Flex direction="column" className="gap-2 rounded-8 bg-divider p-16">
            <p className="truncate text-subtitle-2">{field.value.name}</p>
            <p className="truncate text-paragraph-2 text-sign-secondary">{field.value.address}</p>
          </Flex>
        </>
      )}
      <div className="scrollbar h-full overflow-hidden overflow-y-scroll">
        {status === 'ZERO_RESULTS' && <p className="text-center">검색 결과가 없습니다.</p>}
        {status === 'OK' && (
          <ItemList
            data={data}
            renderItem={(place) => <LocationItem place={place} onSelect={handleSelect} />}
            hasDivider={false}
            className="py-8"
          />
        )}
      </div>

      <ButtonGroup>
        <Button onClick={onClose} disabled={!fieldState.isDirty}>
          {t('create.continue')}
        </Button>
      </ButtonGroup>
    </BottomSheet>
  );
}
