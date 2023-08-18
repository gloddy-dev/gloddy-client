'use client';
import GroupingCard from '@/app/grouping/components/GroupingCard.client';
import { DivisionBar, DivisionSpacing, Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { DUMMY_GROUPING_DATA } from '@/constants/dummyData';

interface ParticipatingContentProps {}
export default function ParticipatingContent() {
  return (
    <div className="px-20">
      <Spacing size={20} />
      <p>
        <Spacing size={4} direction="horizontal" />
        <span className="text-subtitle-3 text-sign-secondary">멤버로 참여중인 모임</span>
      </p>
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[0]} />
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[0]} />
      <Spacing size={8} />
      <DivisionSpacing size={5} />
      <Spacing size={20} />
      <p>
        <Spacing size={4} direction="horizontal" />
        <span className="text-subtitle-3 text-sign-secondary">멤버로 참여중인 모임</span>
      </p>
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[0]} />
      <GroupingCard groupingData={DUMMY_GROUPING_DATA[0]} />
    </div>
  );
}
