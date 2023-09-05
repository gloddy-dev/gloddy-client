import LocationItem from './LoctationItem.client';
import { CreateGroupContextValue } from '../type';
import { Button, ButtonGroup } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';
import { BottomSheet } from '@/components/Modal';
import { TextField } from '@/components/TextField';
import { useEffect, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { Map } from 'react-kakao-maps-sdk';

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
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState<kakao.maps.services.PlacesSearchResult>([]);
  const [snapPoints, setSnapPoints] = useState<number[]>([500, 0]);
  const [map, setMap] = useState<kakao.maps.Map | undefined>();

  const { field, fieldState } = useController({
    name: 'place',
    control,
  });

  useEffect(() => {
    field.onChange({
      name: '',
      address: '',
      latitude: '',
      longitude: '',
    });

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
    if (places.length === 0) {
      setSnapPoints([240, 0]);
      return;
    }
    if (fieldState.isDirty) {
      setSnapPoints([330, 0]);
      return;
    }
    setSnapPoints([500, 0]);
  }, [fieldState.isDirty, places]);

  return (
    <BottomSheet
      snapPoints={snapPoints}
      onClose={onClose}
      title="모임 장소"
      mountPoint={document.getElementById('setting') as HTMLElement}
      isTapOutsideToClose
      disableDrag
      isOpen={isOpen}
    >
      <TextField
        placeholder="모임 위치를 입력해주세요."
        value={keyword}
        onChange={(e) => setKeyword((e.target as HTMLInputElement).value)}
        leftIcon={<Icon id="24-search" width={24} height={24} />}
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
        {fieldState.isDirty ? (
          <Flex direction="column" className="gap-2 overflow-hidden rounded-8 bg-divider p-16">
            <p className="truncate text-subtitle-2">{field.value.name}</p>
            <p className="truncate text-paragraph-2 text-sign-secondary">{field.value.address}</p>
          </Flex>
        ) : (
          <ItemList
            data={places}
            renderItem={(place) => (
              <LocationItem
                place={place}
                onSelect={(place) =>
                  field.onChange({
                    name: place.place_name,
                    address: place.address_name,
                    latitude: place.y,
                    longitude: place.x,
                  })
                }
              />
            )}
            hasDivider={false}
            className="px-24 py-8"
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
