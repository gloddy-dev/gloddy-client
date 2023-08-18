'use client';
import { GroupingCard } from '@/components/Card';
import { DUMMY_GROUPING_DATA } from '@/constants/dummyData';

interface WaitingContentProps {}
export default function WaitingContent() {
  return (
    <div>
      {DUMMY_GROUPING_DATA.map((groupingData) => (
        <GroupingCard groupingData={groupingData} key={groupingData.groupId} />
      ))}
    </div>
  );
}
