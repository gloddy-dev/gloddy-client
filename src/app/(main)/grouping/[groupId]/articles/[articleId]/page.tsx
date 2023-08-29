import ArticleDetail from './components/ArticleDetail.client';
import ArticleHeader from './components/ArticleHeader.client';
import CommentForm from './components/CommentForm';
import { Keys, getArticle } from '@/apis/groups';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/Provider';
import { Spacing } from '@/components/common/Spacing';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface ArticleDetailPageProps {
  params: {
    groupId: string;
    articleId: string;
  };
}

export default function ArticlePage({ params }: ArticleDetailPageProps) {
  const groupId = Number(params.groupId);
  const articleId = Number(params.articleId);

  return (
    <>
      <ArticleHeader groupId={groupId} />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback}>
        <HydrationProvider
          queryFn={() => getArticle(groupId, articleId)}
          queryKey={Keys.getArticle(groupId, articleId)}
        >
          <ArticleDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
      <Spacing size={100} />
      <CommentForm />
    </>
  );
}
