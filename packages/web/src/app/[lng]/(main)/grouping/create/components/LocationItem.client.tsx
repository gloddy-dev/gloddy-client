import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';

interface LocationItemProps<T = google.maps.places.AutocompletePrediction> {
  place: google.maps.places.AutocompletePrediction;
  onSelect: (place: T) => void;
}

export default function LocationItem({ place, onSelect }: LocationItemProps) {
  const mainText = place.structured_formatting.main_text;
  const secondaryText = place.structured_formatting.secondary_text;

  return (
    <Flex align="start" className="hover:bg-sub gap-8 py-12" onClick={() => onSelect(place)}>
      <Icon id="24-location_on" className="shrink-0" />
      <div className="overflow-hidden">
        <p className="text-subtitle-2 truncate">{mainText}</p>
        <p className="text-paragraph-2 text-sign-tertiary truncate">{secondaryText}</p>
      </div>
    </Flex>
  );
}
