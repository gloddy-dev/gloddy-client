'use client';
import SubtitleSection from './SubtitleSection';
import { useGetMeetingHosting, useGetMeetingParticipating } from '@/apis/meeting';
import { GroupingCard } from '@/components/Card';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';

export default function ParticipatingContent() {
  const {
    data: { groups: meetingParticipatingData },
  } = useGetMeetingParticipating();
  const {
    data: { groups: meetingHostingData },
  } = useGetMeetingHosting();

  return (
    <>
      <Spacing size={20} />
      <SubtitleSection text="멤버로 참여중인 모임" />

      {meetingParticipatingData.map((groupingData) => (
        <GroupingCard groupingData={groupingData} key={groupingData.groupId} />
      ))}

      <Spacing size={8} />
      <Divider thickness="thick" />
      <Spacing size={20} />

      <SubtitleSection text="내가 호스팅한 모임" />

      {meetingHostingData.map((groupingData) => (
        <GroupingCard groupingData={groupingData} key={groupingData.groupId} />
      ))}
    </>
  );
}
