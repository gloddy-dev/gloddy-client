'use client';
import { GroupingCard } from '@/components/Card';
import { DivisionSpacing, Spacing } from '@/components/common/Spacing';
import { DUMMY_GROUPING_DATA } from '@/constants/dummyData';

interface ParticipatingContentProps {}
export default function ParticipatingContent() {
  return (
    <div className="px-20">
      <Spacing size={20} />
      <div>
        <Spacing size={4} direction="horizontal" />
        <span className="text-subtitle-3 text-sign-secondary">멤버로 참여중인 모임</span>
      </div>
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[0]} />
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[1]} />
      <Spacing size={8} />
      <DivisionSpacing size={5} />
      <Spacing size={20} />
      <div>
        <Spacing size={4} direction="horizontal" />
        <span className="text-subtitle-3 text-sign-secondary">멤버로 참여중인 모임</span>
      </div>
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[2]} />
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[1]} />
    </div>
  );
}
