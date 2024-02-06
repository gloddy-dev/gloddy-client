/* eslint-disable @typescript-eslint/naming-convention */
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';

interface LocationItemProps<T = google.maps.places.AutocompletePrediction> {
  place: T;
  onSelect: (place: T) => void;
}

export default function LocationItem({ place, onSelect }: LocationItemProps) {
  const {
    structured_formatting: { main_text, secondary_text },
  } = place;

  return (
    <Flex align="start" className="hover:bg-sub gap-8 py-12" onClick={() => onSelect(place)}>
      <Icon id="24-location_on" className="shrink-0" />
      <div className="overflow-hidden">
        <p className="text-subtitle-2 truncate">{main_text}</p>
        <p className="text-paragraph-2 text-sign-tertiary truncate">{secondary_text}</p>
      </div>
    </Flex>
  );
}
