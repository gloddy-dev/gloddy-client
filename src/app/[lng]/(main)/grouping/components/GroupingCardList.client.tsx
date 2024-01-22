'use client';
import NoMeeting from '../../meeting/components/NoMeeting';
import { useGetGroups } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { GroupingCard } from '@/components/Card';
import { ItemList } from '@/components/List';
import { useBlockStore } from '@/store/useBlockStore';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function GroupingCardList() {
  const { blockGroupIds } = useBlockStore();
  const { data: groupList, fetchNextPage, hasNextPage } = useGetGroups();
  const { t } = useTranslation('grouping');

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <ItemList
        data={groupList}
        renderItem={(group) =>
          !blockGroupIds.includes(group.groupId) && <GroupingCard groupingData={group} />
        }
        renderEmpty={() => <NoMeeting message={t('noGroup')} />}
      />
      <div ref={ref} />
    </>
  );
}
