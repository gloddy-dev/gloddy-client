import { Flex } from '@/components/Layout';
import Image from 'next/image';

interface LocationItemProps {
  place: kakao.maps.services.PlacesSearchResultItem;
  onSelect: (place: kakao.maps.services.PlacesSearchResultItem) => void;
}

export default function LocationItem({ place, onSelect }: LocationItemProps) {
  const { place_name: placeName, address_name: addressName } = place;

  return (
    <Flex align="start" className="gap-8 py-12 hover:bg-sub" onClick={() => onSelect(place)}>
      <Image src="/icons/24/location_on.svg" alt="location" width={24} height={24} />
      <div>
        <p className="truncate text-subtitle-2">{placeName}</p>
        <p className="truncate text-paragraph-2 text-sign-tertiary">{addressName}</p>
      </div>
    </Flex>
  );
}
