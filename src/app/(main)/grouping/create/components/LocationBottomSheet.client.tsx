import LocationItem from './LoctationItem.client';
import { CreateGroupContextValue } from '../type';
import { Button, ButtonGroup } from '@/components/Button';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';
import { BottomSheet } from '@/components/Modal';
import { TextField } from '@/components/TextField';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { Map } from 'react-kakao-maps-sdk';

interface LocationBottomSheetProps {
  control: Control<CreateGroupContextValue>;
  onClose: () => void;
}

export default function LocationBottomSheet({ control, onClose }: LocationBottomSheetProps) {
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState<kakao.maps.services.PlacesSearchResult>([]);
  const [snapPoints, setSnapPoints] = useState<number[]>([500, 0]);
  const [map, setMap] = useState<kakao.maps.Map | undefined>();

  const { field: placeNameField, fieldState: placeNameState } = useController({
    name: 'placeName',
    control,
  });

  const { field: placeAddressField, fieldState: placeAddressState } = useController({
    name: 'placeAddress',
    control,
  });

  useEffect(() => {
    placeAddressField.onChange('');
    placeNameField.onChange('');
    if (!map || !keyword) {
      setPlaces([]);
      return;
    }

    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setPlaces(data);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, keyword]);

  useEffect(() => {
    if (placeNameField.value && placeAddressField.value) {
      setSnapPoints([330, 0]);
      return;
    }
    setSnapPoints([500, 0]);
  }, [placeNameField.value, placeAddressField.value]);

  return (
    <BottomSheet
      snapPoints={snapPoints}
      onClose={onClose}
      title="모임 장소"
      mountPoint={document.getElementById('setting') as HTMLElement}
      isTapOutsideToClose
    >
      <TextField
        placeholder="모임 위치를 입력해주세요."
        value={keyword}
        onChange={(e) => setKeyword((e.target as HTMLInputElement).value)}
        leftIcon={<Image src="/icons/24/search.svg" alt="search" width={24} height={24} />}
      />
      <Map
        center={{
          lat: 37.506502,
          lng: 127.053617,
        }}
        onCreate={setMap}
        className="hidden"
      />
      <div className="scrollbar h-full overflow-hidden overflow-y-scroll">
        {placeNameField.value && placeAddressField.value ? (
          <Flex direction="column" className="gap-2 rounded-8 bg-divider p-16">
            <p className="text-subtitle-2">{placeNameField.value}</p>
            <p className="truncate text-paragraph-2 text-sign-secondary">
              {placeAddressField.value}
            </p>
          </Flex>
        ) : (
          <ItemList
            data={places}
            renderItem={(place) => (
              <LocationItem
                place={place}
                onSelect={(place) => {
                  placeNameField.onChange(place.place_name);
                  placeAddressField.onChange(place.address_name);
                }}
              />
            )}
            hasDivider={false}
            className="px-24 py-8"
          />
        )}
      </div>

      <ButtonGroup>
        <Button onClick={onClose} disabled={!placeNameState.isDirty || !placeAddressState.isDirty}>
          완료
        </Button>
      </ButtonGroup>
    </BottomSheet>
  );
}
