'use client';
import { GroupingCard } from '@/components/Card';
import { DivisionSpacing, Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
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
      {DUMMY_GROUPING_DATA.map((groupingData) => (
        <GroupingCard groupingData={groupingData} key={groupingData.groupId} />
      ))}

      <Spacing size={8} />
      <Divider thickness="thick" />
      <Spacing size={20} />
      <div>
        <Spacing size={4} direction="horizontal" />
        <span className="text-subtitle-3 text-sign-secondary">멤버로 참여중인 모임</span>
      </div>
      {DUMMY_GROUPING_DATA.map((groupingData) => (
        <GroupingCard groupingData={groupingData} key={groupingData.groupId} />
      ))}
    </div>
  );
}
