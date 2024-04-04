'use client';

import FeedbackModal from './FeedbackModal';
import SubtitleSection from './SubtitleSection';

import { useGetMeetingNotEstimated } from '@/apis/meeting';
import { useTranslation } from '@/app/i18n/client';
import { Button } from '@/components/Button';
import { GroupingCard } from '@/components/Card';
import { Empty } from '@/components/Empty';
import { Spacing } from '@/components/Spacing';
import useModal from '@/hooks/useModal/useModal';

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
        <Empty message={t('home.noMutualEvaluationGroups')} />
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
