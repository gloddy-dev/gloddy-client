import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';

interface LocationItemProps {
  place: google.maps.places.PlaceResult;
  onSelect: (place: google.maps.places.PlaceResult) => void;
}

export default function LocationItem({ place, onSelect }: LocationItemProps) {
  const { name, formatted_address: address } = place;

  return (
    <Flex align="start" className="gap-8 py-12 hover:bg-sub" onClick={() => onSelect(place)}>
      <Icon id="24-location_on" />
      <div className="overflow-hidden">
        <p className="truncate text-subtitle-2">{name}</p>
        <p className="truncate text-paragraph-2 text-sign-tertiary">{address}</p>
      </div>
    </Flex>
  );
}
