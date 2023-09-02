'use client';
import { useGetGroups } from '@/apis/groups';
import { GroupingCard } from '@/components/Card';
import { ItemList } from '@/components/List';
import useIntersect from '@/hooks/useIntersect';

export default function GroupingCardList() {
  const { data, fetchNextPage } = useGetGroups();

  const target = useIntersect(fetchNextPage);

  return (
    <>
      <ItemList data={data} renderItem={(grouping) => <GroupingCard groupingData={grouping} />} />
      <div ref={target} />
    </>
  );
}
