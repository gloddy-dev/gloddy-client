import { Spacing } from '@/components/common/Spacing';

import type { GroupResponse } from '@/apis/groups';

interface LocationSectionProps
  extends Pick<GroupResponse, 'place' | 'placeLatitude' | 'placeLongitude'> {}

export default function LocationSection({
  place,
  placeLatitude,
  placeLongitude,
}: LocationSectionProps) {
  return (
    <section>
      <h2 className="text-14">모임 위치</h2>
      <Spacing size={10} />
      <div className="rounded-8 bg-gray6 p-16">
        <div className="h-100 rounded-8 bg-black"></div>
        <Spacing size={8} />
        <p className="text-14">{place}</p>
      </div>
    </section>
  );
}
