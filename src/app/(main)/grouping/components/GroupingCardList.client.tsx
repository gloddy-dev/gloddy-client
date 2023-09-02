'use client';
import { useGetGroups } from '@/apis/groups';
import { GroupingCard } from '@/components/Card';
import { InfiniteScrollSensor } from '@/components/InfiniteScrollSensor';
import { ItemList } from '@/components/List';
import useIntersection from '@/hooks/useIntersection';
import { useCallback, useEffect, useRef } from 'react';

export default function GroupingCardList() {
  const { data, fetchNextPage } = useGetGroups();

  const onIntersect = useCallback(
    async (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        await fetchNextPage();
        observer.observe(entry.target);
      }
    },
    [fetchNextPage]
  );
  const target = useIntersection(onIntersect);

  return (
    <>
      <ItemList data={data} renderItem={(grouping) => <GroupingCard groupingData={grouping} />} />
      <div ref={target} />
    </>
  );
}
