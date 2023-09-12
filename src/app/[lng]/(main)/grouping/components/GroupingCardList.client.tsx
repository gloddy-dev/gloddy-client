'use client';
import { useGetGroups } from '@/apis/groups';
import { GroupingCard } from '@/components/Card';
import { ItemList } from '@/components/List';
import { Loading } from '@/components/Loading';
import useIntersect from '@/hooks/useIntersect';
import { useBlockStore } from '@/store/useBlockStore';
import { useCallback } from 'react';
import PullToRefresh from 'react-simple-pull-to-refresh';

export default function GroupingCardList() {
  const { blockGroupIds } = useBlockStore();
  const { data, fetchNextPage, hasNextPage, remove, isLoading, refetch } = useGetGroups();

  const onIntersect = useCallback(async () => {
    if (hasNextPage && !isLoading) {
      await fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isLoading]);

  const target = useIntersect(onIntersect);

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
      <div ref={target} />
    </>
  );
}
