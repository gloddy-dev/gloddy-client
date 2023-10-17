'use client';
import { useGetGroups } from '@/apis/groups';
import { GroupingCard } from '@/components/Card';
import { ItemList } from '@/components/List';
import { useBlockStore } from '@/store/useBlockStore';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function GroupingCardList() {
  const { blockGroupIds } = useBlockStore();
  const { data, fetchNextPage } = useGetGroups();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <>
      <ItemList
        data={data}
        renderItem={(grouping) =>
          !blockGroupIds.includes(grouping.groupId) && <GroupingCard groupingData={grouping} />
        }
      />
      <div ref={ref} />
    </>
  );
}
