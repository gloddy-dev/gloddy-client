'use client';
import { useGetArticle, useGetGroupDetail } from '@/apis/groups';
import { useMoreSheet } from '@/app/(main)/grouping/hooks/useMoreSheet';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

export default function ArticleHeader() {
  const router = useRouter();

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => router.back()}>
          <Image src="/icons/24/arrow_back.svg" alt="back" width={24} height={24} />
        </IconButton>
        <p>게시글</p>
      </Header.Left>
      <Header.Right>
        <Suspense>
          <ActionIconButton />
        </Suspense>
      </Header.Right>
    </Header>
  );
}

function ActionIconButton() {
  const { groupId, articleId } = useNumberParams<['groupId', 'articleId']>();
  const { data: groupDetailData } = useGetGroupDetail(groupId);
  const { data: articleData } = useGetArticle(groupId, articleId);
  const { isWriter, notice } = articleData;
  const { isCaptain } = groupDetailData;
  const { handleMoreClick } = useMoreSheet({
    type: notice ? 'notice' : 'article',
    isWriter,
    isCaptain,
    groupId,
    articleId,
  });

  return (
    <IconButton size="large" onClick={handleMoreClick}>
      <Image src="/icons/24/more.svg" alt="more" width={24} height={24} />
    </IconButton>
  );
}
