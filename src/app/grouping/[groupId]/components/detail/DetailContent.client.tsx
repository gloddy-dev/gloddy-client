'use client';
import LocationSection from './LocationSection.client';
import MemberSection from './MemberSection.client';
import TimeSection from './TimeSection.client';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';

import type { GroupDetailResponse } from '@/apis/groups/type';

interface DetailContentProps {
  groupDetailData: GroupDetailResponse;
}

export default function DetailContent({ groupDetailData }: DetailContentProps) {
  const {
    place,
    placeLatitude,
    placeLongitude,
    meetDate,
    startTime,
    endTime,
    myGroup,
    maxUser,
    memberCount,
  } = groupDetailData;

  return (
    <>
      <Spacing size={20} />
      <MemberSection maxUser={maxUser} memberCount={memberCount} />
      <Spacing size={36} />
      <TimeSection meetDate={meetDate} startTime={startTime} endTime={endTime} />
      <Spacing size={28} />
      <LocationSection
        place={place}
        placeLatitude={placeLatitude}
        placeLongitude={placeLongitude}
      />
      <Spacing size={100} />
      {myGroup && (
        <ButtonGroup>
          <Button>모임 가입하기</Button>
        </ButtonGroup>
      )}
    </>
  );
}
