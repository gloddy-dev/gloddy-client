import BoardDetail from './components/BoardDetail.client';
import BoardHeader from './components/BoardHeader.client';
import CommentForm from './components/CommentForm';
import { Keys, getArticle } from '@/apis/groups';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { Spacing } from '@/components/common/Spacing';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface BoardDetailPageProps {
  params: {
    groupId: string;
    articleId: string;
  };
}

export default function BoardDetailPage({ params }: BoardDetailPageProps) {
  const groupId = Number(params.groupId);
  const articleId = Number(params.articleId);

  return (
    <>
      <BoardHeader groupId={groupId} />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback}>
        <HydrationProvider
          queryFn={() => getArticle(groupId, articleId)}
          queryKey={Keys.getArticle(groupId, articleId)}
        >
          <BoardDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
      <Spacing size={100} />
      <CommentForm />
    </>
  );
}
