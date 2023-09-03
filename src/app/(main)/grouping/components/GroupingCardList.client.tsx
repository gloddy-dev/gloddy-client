'use client';
import { useGetGroups } from '@/apis/groups';
import { GroupingCard } from '@/components/Card';
import { ItemList } from '@/components/List';
import useIntersect from '@/hooks/useIntersect';
import { useCallback } from 'react';

export default function GroupingCardList() {
  const { data, fetchNextPage, hasNextPage, isLoading } = useGetGroups();

  const onIntersect = useCallback(async () => {
    if (hasNextPage && !isLoading) {
      await fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isLoading]);

  const target = useIntersect(onIntersect);

  return (
    <>
      <ItemList data={data} renderItem={(grouping) => <GroupingCard groupingData={grouping} />} />
      <div ref={target} />
    </>
  );
}
