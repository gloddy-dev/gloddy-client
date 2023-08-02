'use client';
import LocationSection from './LocationSection.client';
import MemberSection from './MemberSection.client';
import TimeSection from './TimeSection.client';
import { BottomFixedButton } from '@/components/common/Button';
import { Spacing } from '@/components/common/Spacing';

import type { GroupResponse } from '@/apis/groups/type';

interface DetailContentProps {
  groupData: GroupResponse;
}

export default function DetailContent({ groupData }: DetailContentProps) {
  const { place, placeLatitude, placeLongitude, meetDate, startTime, endTime, myGroup } = groupData;

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
      {!myGroup && (
        <>
          <Spacing size={100} />
          <BottomFixedButton text="모임 가입하기" />
        </>
      )}
    </>
  );
}
