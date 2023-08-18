'use client';
import { Button } from '@/components/Button';
import { GroupingCard } from '@/components/Card';
import { Spacing } from '@/components/common/Spacing';
import { DUMMY_GROUPING_DATA } from '@/constants/dummyData';

interface FeedbackContentProps {}
export default function FeedbackContent() {
  return (
    <div className="px-20">
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[0]}>
        <Spacing size={8} />
        <Button size="small">모임 평가하기</Button>
      </GroupingCard>
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[0]}>
        <Spacing size={8} />
        <Button size="small">모임 평가하기</Button>
      </GroupingCard>
    </div>
  );
}
