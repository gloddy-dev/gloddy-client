'use client';
import SubtitleSection from './SubtitleSection';
import { GroupingCard } from '@/components/Card';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { DUMMY_GROUPING_DATA } from '@/constants/dummyData';

export default function WaitingContent() {
  return (
    <div className="px-20">
      <Spacing size={20} />
      <SubtitleSection text="승인 대기중인 모임" />

      {DUMMY_GROUPING_DATA.map((groupingData) => (
        <GroupingCard groupingData={groupingData} key={groupingData.groupId} />
      ))}

      <Spacing size={8} />
      <Divider thickness="thick" />
      <Spacing size={20} />

      <SubtitleSection text="거절된 모임" />

      {DUMMY_GROUPING_DATA.map((groupingData) => (
        <GroupingCard groupingData={groupingData} key={groupingData.groupId} />
      ))}
    </div>
  );
}
