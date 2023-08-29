'use client';
import { useGetGroups } from '@/apis/groups';
import { GroupingCard } from '@/components/Card';
import { Flex } from '@/components/Layout';

export default function GroupingCardList() {
  const { data } = useGetGroups();

  return (
    <Flex direction="column" className="gap-8">
      {data.map((groupingData) => (
        <GroupingCard groupingData={groupingData} key={groupingData.groupId} />
      ))}
    </Flex>
  );
}
