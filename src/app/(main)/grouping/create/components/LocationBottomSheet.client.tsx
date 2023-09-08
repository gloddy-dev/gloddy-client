import LocationItem from './LoctationItem.client';
import { CreateGroupContextValue } from '../type';
import { Button, ButtonGroup } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';
import { BottomSheet } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { TextField } from '@/components/TextField';
import { GOOGLE_API_KEY } from '@/constants';
import {
  GoogleMap,
  type Libraries,
  Marker,
  StandaloneSearchBox,
  useJsApiLoader,
} from '@react-google-maps/api';
import { useEffect, useRef, useState } from 'react';
import { Control, useController } from 'react-hook-form';

interface LocationBottomSheetProps {
  control: Control<CreateGroupContextValue>;
  onClose: () => void;
  isOpen: boolean;
}

const libraries: Libraries = ['places'];

export default function LocationBottomSheet({
  control,
  onClose,
  isOpen,
}: LocationBottomSheetProps) {
  const { isLoaded } = useJsApiLoader({
    preventGoogleFontsLoading: true,
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY as string,
    libraries,
    language: 'en', // 언어 설정
    region: 'KR',
    nonce: 'location',
  });
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();
  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([]);
  const [snapPoints, setSnapPoints] = useState<number[]>([-100, 0]);
  const ref = useRef<HTMLInputElement>(null);

  const { field, fieldState } = useController({
    name: 'place',
    control,
    rules: {
      required: true,
    },
  });

  useEffect(() => {
    field.onChange({
      id: '',
      name: '',
      address: '',
      latitude: undefined,
      longitude: undefined,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places]);
  return (
    <BottomSheet
      snapPoints={snapPoints}
      onClose={onClose}
      title="모임 장소"
      isTapOutsideToClose
      disableDrag
      isOpen={isOpen}
    >
      {isLoaded && (
        <>
          <StandaloneSearchBox
            onLoad={(searchBox) => setSearchBox(searchBox)}
            onPlacesChanged={() => {
              const places = searchBox?.getPlaces() || [];
              setPlaces(places);
            }}
          >
            <TextField
              ref={ref}
              placeholder="모임 위치를 입력해주세요."
              leftIcon={<Icon id="24-search" width={24} height={24} />}
            />
          </StandaloneSearchBox>
          <Spacing size={20} />
          <div className="aspect-video">
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '200px', borderRadius: '8px' }}
              center={{
                lat: field.value.latitude || places[0]?.geometry?.location?.lat() || 37.566,
                lng: field.value.longitude || places[0]?.geometry?.location?.lng() || 126.978,
              }}
              zoom={15}
              options={{
                disableDefaultUI: true,
                keyboardShortcuts: false,
              }}
            >
              {places.map((place) => (
                <Marker
                  key={place.place_id}
                  position={{
                    lat: place.geometry?.location?.lat() || 0,
                    lng: place.geometry?.location?.lng() || 0,
                  }}
                  onClick={() => {
                    field.onChange({
                      id: place.place_id,
                      name: place.name,
                      address: place.formatted_address,
                      latitude: place.geometry?.location?.lat(),
                      longitude: place.geometry?.location?.lng(),
                    });
                  }}
                />
              ))}
            </GoogleMap>
          </div>
        </>
      )}
      <div className="scrollbar h-full overflow-hidden overflow-y-scroll">
        {fieldState.isDirty ? (
          <Flex
            direction="column"
            className="mt-20 gap-2 overflow-hidden rounded-8 bg-divider p-16"
          >
            <p className="truncate text-subtitle-2">{field.value.name}</p>
            <p className="truncate text-paragraph-2 text-sign-secondary">{field.value.address}</p>
          </Flex>
        ) : (
          <ItemList
            data={places || []}
            renderItem={(place) => (
              <LocationItem
                place={place}
                onSelect={(place) => {
                  field.onChange({
                    id: place.place_id,
                    name: place.name,
                    address: place.formatted_address,
                    latitude: place.geometry?.location?.lat(),
                    longitude: place.geometry?.location?.lng(),
                  });
                }}
              />
            )}
            hasDivider={false}
            className="py-8"
          />
        )}
      </div>

      <ButtonGroup>
        <Button onClick={onClose} disabled={!fieldState.isDirty}>
          완료
        </Button>
      </ButtonGroup>
    </BottomSheet>
  );
}
