'use client';
import FeedbackModal from './FeedbackModal.client';
import SubtitleSection from './SubtitleSection';
import NoMeeting from '../../components/NoMeeting';
import { useGetMeetingNotEstimated } from '@/apis/meeting';
import { useTranslation } from '@/app/i18n/client';
import { Button } from '@/components/Button';
import { GroupingCard } from '@/components/Card';
import { Spacing } from '@/components/Spacing';
import { useModal } from '@/hooks';

export default function FeedbackContent() {
  const { t } = useTranslation('meeting');
  const {
    data: { groups: meetingNotEstimatedData },
  } = useGetMeetingNotEstimated();
  const { open, exit } = useModal();

  return (
    <>
      <Spacing size={20} />
      <SubtitleSection text={t('home.mutualEvaluationRequired')} />

      {meetingNotEstimatedData.length === 0 && (
        <NoMeeting message={t('home.noMutualEvaluationGroups')} />
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
              open(() => <FeedbackModal onClose={exit} groupId={groupingData.group.groupId} />)
            }
          >
            {t('home.evaluateGroup')}
          </Button>
        </GroupingCard>
      ))}
    </>
  );
}
