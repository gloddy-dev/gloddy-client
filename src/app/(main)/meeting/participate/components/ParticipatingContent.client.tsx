'use client';
import SubtitleSection from './SubtitleSection';
import NoMeeting from '../../components/NoMeeting';
import { useGetMeetingHosting, useGetMeetingParticipating } from '@/apis/meeting';
import { GroupingCard } from '@/components/Card';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';

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

      {meetingParticipatingData.length === 0 && <NoMeeting message="참여중인 모임이 없어요." />}
      {meetingParticipatingData.map((groupingData) => (
        <GroupingCard
          groupingData={groupingData.group}
          key={groupingData.group.groupId}
          isNew={groupingData.isNew}
        />
      ))}

      <Spacing size={8} />
      <Divider thickness="thick" />
      <Spacing size={20} />

      <SubtitleSection text="내가 호스팅한 모임" />

      {meetingHostingData.length === 0 && <NoMeeting message="내가 진행하는 모임이 없어요." />}
      {meetingHostingData.map((groupingData) => (
        <GroupingCard
          groupingData={groupingData.group}
          key={groupingData.group.groupId}
          isExistNewApply={groupingData.isExistNewApply}
        />
      ))}
    </>
  );
}
