'use client';

import NoticeItem from './NoticeItem.client';
import { useGetGroupDetail, useGetNotice } from '@/apis/groups';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { ItemList } from '@/components/List';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';

export default function NoticeSection() {
  const { groupId } = useNumberParams<['groupId']>();

  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { isCaptain } = groupDetailData;

  const { data: noticeData } = useGetNotice(groupId);

  return (
    <section className="p-20 pb-8">
      <div className="rounded-8 bg-card-ui p-16 text-subtitle-3 text-sign-secondary">
        <p className="pl-4">공지사항</p>
        <Spacing size={6} />
        {noticeData.length === 0 ? (
          <EmptyNotice />
        ) : (
          <ItemList
            data={noticeData}
            renderItem={(notice) => (
              <NoticeItem notice={notice} groupId={groupId} isCaptain={isCaptain} />
            )}
          />
        )}
      </div>
    </section>
  );
}

function EmptyNotice() {
  return (
    <Flex align="center" className="gap-4 py-4">
      <Image src="/icons/24/info.svg" alt="info" width={24} height={24} />
      <p>등록된 공지사항이 없어요.</p>
    </Flex>
  );
}
