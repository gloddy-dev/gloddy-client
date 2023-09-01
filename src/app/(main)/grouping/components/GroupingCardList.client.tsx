'use client';
import { useGetGroups } from '@/apis/groups';
import { GroupingCard } from '@/components/Card';
import { ItemList } from '@/components/List';

export default function GroupingCardList() {
  const { data } = useGetGroups();

  return (
    <ItemList data={data} renderItem={(grouping) => <GroupingCard groupingData={grouping} />} />
  );
}
