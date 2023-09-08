'use client';
import { useGetArticle, useGetGroupDetail } from '@/apis/groups';
import { useMoreSheet } from '@/app/(main)/grouping/hooks/useMoreSheet';
import { IconButton } from '@/components/Button';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { useNumberParams } from '@/hooks/useNumberParams';
import { QueryAsyncBoundary } from '@suspensive/react-query';
import { Loading } from 'antd-mobile';
import { useRouter } from 'next/navigation';

export default function ArticleHeader() {
  const router = useRouter();

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => router.back()}>
          <Icon id="24-arrow_back" />
        </IconButton>
        <p>게시글</p>
      </Header.Left>
      <Header.Right>
        <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
          <IconButtonAction />
        </QueryAsyncBoundary>
      </Header.Right>
    </Header>
  );
}

function IconButtonAction() {
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
      <Icon id="24-more" />
    </IconButton>
  );
}
