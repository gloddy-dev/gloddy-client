'use client';
import { Button } from '@/components/Button';
import { GroupingCard } from '@/components/Card';
import { Spacing } from '@/components/common/Spacing';
import { DUMMY_GROUPING_DATA } from '@/constants/dummyData';
import { useRouter } from 'next/navigation';

interface FeedbackContentProps {}
export default function FeedbackContent() {
  const router = useRouter();

  return (
    <div className="px-20">
      {DUMMY_GROUPING_DATA.map((groupingData) => (
        <GroupingCard groupingData={groupingData} key={groupingData.groupId}>
          <Spacing size={8} />
          <Button size="small" onClick={() => router.push(`grouping/${1}/feedback?step=praise`)}>
            모임 평가하기
          </Button>
        </GroupingCard>
      ))}
    </div>
  );
}
