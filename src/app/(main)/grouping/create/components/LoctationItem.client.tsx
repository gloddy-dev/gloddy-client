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
    <Flex align="start" className="gap-8 py-12 hover:bg-sub" onClick={() => onSelect(place)}>
      <Icon id="24-location_on" className="shrink-0" />
      <div className="overflow-hidden">
        <p className="truncate text-subtitle-2">{main_text}</p>
        <p className="truncate text-paragraph-2 text-sign-tertiary">{secondary_text}</p>
      </div>
    </Flex>
  );
}
