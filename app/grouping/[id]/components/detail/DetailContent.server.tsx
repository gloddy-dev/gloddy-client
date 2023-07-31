import LocationSection from './LocationSection.server';
import MemberSection from './MemberSection.server';
import TimeSection from './TimeSection.server';
import { Spacing } from '@/components/common/Spacing';

import type { GroupResponse } from '@/apis/groups';

interface DetailContentProps {
  groupData: GroupResponse;
}

export default function DetailContent({ groupData }: DetailContentProps) {
  const { place, placeLatitude, placeLongitude, meetDate, startTime, endTime } = groupData;

  return (
    <>
      <MemberSection />
      <Spacing size={18} />
      <TimeSection meetDate={meetDate} startTime={startTime} endTime={endTime} />
      <Spacing size={18} />
      <LocationSection
        place={place}
        placeLatitude={placeLatitude}
        placeLongitude={placeLongitude}
      />
      <Spacing size={100} />
    </>
  );
}
