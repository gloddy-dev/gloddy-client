import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';

interface LocationItemProps {
  place: kakao.maps.services.PlacesSearchResultItem;
  onSelect: (place: kakao.maps.services.PlacesSearchResultItem) => void;
}

export default function LocationItem({ place, onSelect }: LocationItemProps) {
  const { place_name: placeName, address_name: addressName } = place;

  return (
    <Flex align="start" className="gap-8 py-12 hover:bg-sub" onClick={() => onSelect(place)}>
      <Icon id="24-location_on" />
      <div className="overflow-hidden">
        <p className="truncate text-subtitle-2">{placeName}</p>
        <p className="truncate text-paragraph-2 text-sign-tertiary">{addressName}</p>
      </div>
    </Flex>
  );
}
