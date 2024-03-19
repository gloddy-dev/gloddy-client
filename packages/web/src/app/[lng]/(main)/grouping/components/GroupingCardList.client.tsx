'use client';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useGetGroups } from '@/apis/groups';
import { GroupingCard } from '@/components/Card';
import { Empty } from '@/components/Empty';
import { ItemList } from '@/components/List';
import { useBlockStore } from '@/store/useBlockStore';

interface GroupingCardList {
  lng: string;
}

export default function GroupingCardList({ lng }: GroupingCardList) {
  const { ref, inView } = useInView();
  const { blockGroupIds } = useBlockStore();
  const { data: groupList, fetchNextPage, hasNextPage } = useGetGroups();

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <ItemList
        data={groupList}
        renderItem={(group) => {
          return !blockGroupIds.includes(group.groupId) && <GroupingCard groupingData={group} />;
        }}
        renderEmpty={() => <Empty lng={lng} ns={'grouping'} message={'noGroup'} />}
      />
      <div ref={ref} />
    </>
  );
}
