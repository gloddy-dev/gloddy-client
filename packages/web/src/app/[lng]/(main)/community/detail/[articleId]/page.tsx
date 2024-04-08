import { ErrorBoundary } from 'react-error-boundary';

import ArticleDetail from './components/ArticleDetail';
import ArticleDetailHeader from './components/ArticleDetailHeader';

import { Keys, getCommunityArticleDetail } from '@/apis/community';
import { ErrorFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';

interface CommunityArticlePageProps {
  params: {
    articleId: number;
  };
}

export default async function CommunityArticlePage({ params }: CommunityArticlePageProps) {
  const articleId = Number(params.articleId);

  return (
    <>
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <HydrationProvider
          queryFn={() => getCommunityArticleDetail(articleId)}
          queryKey={Keys.getCommunityArticleDetail(articleId)}
        >
          <ArticleDetailHeader />
          <ArticleDetail articleId={articleId} />
        </HydrationProvider>
      </ErrorBoundary>
      <Spacing size={60} />
    </>
  );
}
