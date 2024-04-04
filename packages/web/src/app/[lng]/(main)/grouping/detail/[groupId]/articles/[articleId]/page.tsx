import { ErrorBoundary } from 'react-error-boundary';

import ArticleDetail from './components/ArticleDetail';
import ArticleHeader from './components/ArticleHeader';
import CommentForm from './components/CommentForm';

import { Keys, getArticle } from '@/apis/groups';
import { ErrorFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';

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
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <HydrationProvider
          queryFn={() => getArticle(groupId, articleId)}
          queryKey={Keys.getArticle(groupId, articleId)}
        >
          <ArticleDetail />
        </HydrationProvider>
      </ErrorBoundary>
      <Spacing size={100} />
      <CommentForm />
      <Spacing size={60} />
    </>
  );
}
