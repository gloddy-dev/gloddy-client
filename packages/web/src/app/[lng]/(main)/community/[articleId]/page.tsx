import { Keys, getCommunityArticleDetail } from '@/apis/community';
import ArticleDetail from '@/app/[lng]/(main)/community/[articleId]/components/ArticleDetail';
import ArticleDetailHeader from '@/app/[lng]/(main)/community/[articleId]/components/ArticleDetailHeader';
import CommentForm from '@/app/[lng]/(main)/community/[articleId]/components/CommentForm';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';

interface CommunityArticlePageProps {
  params: {
    articleId: number;
  };
}

export default function CommunityArticlePage({ params }: CommunityArticlePageProps) {
  const articleId = Number(params.articleId);

  return (
    <>
      <LocalSuspenseErrorBoundary>
        <HydrationProvider
          queryFn={() => getCommunityArticleDetail(articleId)}
          queryKey={Keys.getCommunityArticleDetail(articleId)}
        >
          <ArticleDetailHeader />
          <ArticleDetail articleId={articleId} />
        </HydrationProvider>
      </LocalSuspenseErrorBoundary>
      <Spacing size={60} />
    </>
  );
}
