import ArticleDetail from './components/ArticleDetail.client';
import ArticleHeader from './components/ArticleHeader.client';
import CommentForm from './components/CommentForm';
import { Keys, getArticle } from '@/apis/groups';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';
import { Suspense } from 'react';

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
      <ArticleHeader />
      <LocalSuspenseErrorBoundary>
        <HydrationProvider
          queryFn={() => getArticle(groupId, articleId)}
          queryKey={Keys.getArticle(groupId, articleId)}
        >
          <ArticleDetail />
        </HydrationProvider>
      </LocalSuspenseErrorBoundary>
      <Spacing size={100} />
      <CommentForm />
      <Spacing size={60} />
    </>
  );
}
