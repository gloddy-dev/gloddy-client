'use client';
import SubtitleSection from './SubtitleSection';
import { Grouping } from '@/apis/groups';
import { Button } from '@/components/Button';
import { GroupingCard } from '@/components/Card';
import { Spacing } from '@/components/common/Spacing';
import { DUMMY_GROUPING_DATA } from '@/constants/dummyData';
import { useRouter } from 'next/navigation';

export default function FeedbackContent() {
  const router = useRouter();

  return (
    <>
      <Spacing size={20} />
      <SubtitleSection text="상호 평가가 필요한 모임" />

      {DUMMY_GROUPING_DATA.map((groupingData: Grouping) => (
        <GroupingCard groupingData={groupingData} key={groupingData.groupId}>
          <Spacing size={8} />
          <Button
            size="small"
            variant="solid-secondary"
            onClick={() => router.push(`grouping/${1}/feedback?step=praise`)}
          >
            모임 평가하기
          </Button>
        </GroupingCard>
      ))}
    </>
  );
}
