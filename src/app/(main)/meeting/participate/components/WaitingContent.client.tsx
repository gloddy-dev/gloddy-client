'use client';
import SubtitleSection from './SubtitleSection';
import NoMeeting from '../../components/NoMeeting';
import { useGetMeetingRejected, useGetMeetingWaiting } from '@/apis/meeting';
import { GroupingCard } from '@/components/Card';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';

export default function WaitingContent() {
  const {
    data: { groups: meetingWaitingData },
  } = useGetMeetingWaiting();
  const {
    data: { groups: meetingRejectedData },
  } = useGetMeetingRejected();

  return (
    <>
      <Spacing size={20} />
      <SubtitleSection text="승인 대기중인 모임" />

      {meetingWaitingData.length === 0 && <NoMeeting message="아직 대기중인 모임이 없어요." />}
      {meetingWaitingData.map((groupingData) => (
        <GroupingCard groupingData={groupingData.group} key={groupingData.group.groupId} />
      ))}

      <Spacing size={8} />
      <Divider thickness="thick" />
      <Spacing size={20} />

      <SubtitleSection text="거절된 모임" />

      {meetingRejectedData.length === 0 && <NoMeeting message="거절된 모임이 없어요." />}
      {meetingRejectedData.map((groupingData) => (
        <GroupingCard
          groupingData={groupingData.group}
          key={groupingData.group.groupId}
          applyId={groupingData.applyId}
        />
      ))}
    </>
  );
}
