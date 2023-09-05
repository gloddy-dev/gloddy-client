'use client';
import FeedbackModal from './FeedbackModal.client';
import SubtitleSection from './SubtitleSection';
import NoMeeting from '../../components/NoMeeting';
import { useGetMeetingNotEstimated } from '@/apis/meeting';
import { Button } from '@/components/Button';
import { GroupingCard } from '@/components/Card';
import { Spacing } from '@/components/common/Spacing';
import { useModal } from '@/hooks/useModal';

export default function FeedbackContent() {
  const {
    data: { groups: meetingNotEstimatedData },
  } = useGetMeetingNotEstimated();
  const { open, close } = useModal();

  return (
    <>
      <Spacing size={20} />
      <SubtitleSection text="상호 평가가 필요한 모임" />

      {meetingNotEstimatedData.length === 0 && (
        <NoMeeting message="상호평가가 필요한 모임이 없어요." />
      )}
      {meetingNotEstimatedData.map((groupingData) => (
        <GroupingCard
          groupingData={groupingData.group}
          key={groupingData.group.groupId}
          isCaptain={groupingData.isCaptain}
        >
          <Spacing size={8} />
          <Button
            size="small"
            variant="solid-secondary"
            onClick={() =>
              open(() => <FeedbackModal onClose={close} groupId={groupingData.group.groupId} />)
            }
          >
            모임 평가하기
          </Button>
        </GroupingCard>
      ))}
    </>
  );
}
