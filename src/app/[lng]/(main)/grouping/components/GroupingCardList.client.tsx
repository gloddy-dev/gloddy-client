'use client';
import { useGetGroups } from '@/apis/groups';
import { GroupingCard } from '@/components/Card';
import { ItemList } from '@/components/List';
import { useBlockStore } from '@/store/useBlockStore';
import { setLocalCookie } from '@/utils/cookieController';
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
      <button
        onClick={() => {
          setLocalCookie('i18next', 'ko');
        }}
      >
        한국
      </button>
      <button
        onClick={() => {
          setLocalCookie('i18next', 'en');
        }}
      >
        영어
      </button>
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
