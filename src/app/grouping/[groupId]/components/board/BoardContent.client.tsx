'use client';
import ArticleList from './ArticleList.client';
import NoticeList from './NoticeList.client';
import { FloatAddButton } from '@/components/Button';
import BottomFixedDiv from '@/components/common/BottomFixedDiv';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import type { GroupDetailResponse } from '@/apis/groups/type';

interface BoardContentProps {
  groupDetailData: GroupDetailResponse;
}

export default function BoardContent({ groupDetailData }: BoardContentProps) {
  const params = useParams() as { groupId: string };
  const groupId = Number(params.groupId);
  const { isCaptain, myGroup } = groupDetailData;

  return (
    <>
      <NoticeList isCaptain={isCaptain} />
      <ArticleList isCaptain={isCaptain} />
      {myGroup && (
        <BottomFixedDiv className="flex justify-end">
          <Link href={`/grouping/${groupId}/write`}>
            <FloatAddButton />
          </Link>
        </BottomFixedDiv>
      )}
    </>
  );
}
