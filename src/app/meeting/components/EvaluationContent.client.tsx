'use client';
import { Button } from '@/components/Button';
import { GroupingCard } from '@/components/Card';
import { Spacing } from '@/components/common/Spacing';
import { DUMMY_GROUPING_DATA } from '@/constants/dummyData';

interface EvaluationContentProps {}
export default function EvaluationContent() {
  return (
    <div className="px-20">
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[0]} />
      <Spacing size={8} />
      <Button>모임 평가하기</Button>
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[1]} />
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[2]} />
    </div>
  );
}
