import { Keys, getCommunityArticleDetail } from '@/apis/community';
import ArticleDetail from '@/app/[lng]/(main)/community/[articleId]/components/ArticleDetail';
import ArticleDetailHeader from '@/app/[lng]/(main)/community/[articleId]/components/ArticleDetailHeader';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { Suspense } from 'react';

interface CommunityArticlePageProps {
  params: {
    articleId: number;
  };
}

export default function CommunityArticlePage({ params }: CommunityArticlePageProps) {
  const articleId = Number(params.articleId);

  return (
    <Suspense fallback={<Loading className="h-[calc(100dvh-48px)]" />}>
      <HydrationProvider
        queryFn={() => getCommunityArticleDetail(articleId)}
        queryKey={Keys.getCommunityArticleDetail(articleId)}
      >
        <ArticleDetailHeader />
        <ArticleDetail articleId={articleId} />
      </HydrationProvider>
    </Suspense>
  );
}
