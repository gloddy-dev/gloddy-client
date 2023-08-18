'use client';
import { type Notice, useGetGroupDetail, useGetNotice } from '@/apis/groups';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';
import Link from 'next/link';

export default function NoticeList() {
  const { groupId } = useNumberParams<['groupId']>();

  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { isCaptain } = groupDetailData;

  const { data: noticeData } = useGetNotice(groupId);

  return (
    <div className="p-20 pb-8">
      <div className="rounded-8 bg-card-ui p-16 text-subtitle-3 text-sign-secondary">
        <p className="pl-4">공지사항</p>
        <Spacing size={6} />
        {noticeData.map((notice) => (
          <NoticeItem
            key={notice.noticeId}
            notice={notice}
            groupId={groupId}
            isCaptain={isCaptain}
          />
        ))}
      </div>
    </div>
  );
}

interface NoticeItemProps {
  notice: Notice;
  groupId: number;
  isCaptain: boolean;
}

function NoticeItem({ notice, groupId, isCaptain }: NoticeItemProps) {
  const handleDeleteClick = () => {};

  return (
    <Flex align="center" className="gap-12 py-4">
      <Flex align="center" className="grow gap-4">
        <Image src="/icons/24/announcement.svg" alt="announcement" width={24} height={24} />
        <p>{notice.content}</p>
        {isCaptain && (
          <Image
            src="/icons/24/delete.svg"
            alt="delete"
            width={24}
            height={24}
            onClick={handleDeleteClick}
          />
        )}
      </Flex>
      <Link href={`/grouping/${groupId}/board/${notice.noticeId}`}>
        <Image src="/icons/24/navigate-next.svg" alt="navigate_next" width={24} height={24} />
      </Link>
    </Flex>
  );
}
