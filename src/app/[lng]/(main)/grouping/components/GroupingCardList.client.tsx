'use client';
import { useGetGroups } from '@/apis/groups';
import { GroupingCard } from '@/components/Card';
import { ItemList } from '@/components/List';
import { Loading } from '@/components/Loading';
import { useBlockStore } from '@/store/useBlockStore';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PullToRefresh from 'react-simple-pull-to-refresh';

export default function GroupingCardList() {
  const { blockGroupIds } = useBlockStore();
  const { data, fetchNextPage, remove, refetch } = useGetGroups();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  const handleRefresh = () => {
    remove();
    return refetch();
  };

  return (
    <>
      <PullToRefresh
        onRefresh={handleRefresh}
        pullingContent={''}
        refreshingContent={<Loading className="h-60" />}
        resistance={2}
      >
        <ItemList
          data={data}
          renderItem={(grouping) =>
            !blockGroupIds.includes(grouping.groupId) && <GroupingCard groupingData={grouping} />
          }
        />
      </PullToRefresh>
      <div ref={ref} />
    </>
  );
}
