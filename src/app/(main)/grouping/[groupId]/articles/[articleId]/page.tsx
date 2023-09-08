import ArticleDetail from './components/ArticleDetail.client';
import ArticleHeader from './components/ArticleHeader.client';
import CommentForm from './components/CommentForm';
import { Keys, getArticle } from '@/apis/groups';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';
import { QueryAsyncBoundary } from '@suspensive/react-query';
import { Loading } from 'antd-mobile';

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
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
        <PageAnimation>
          <HydrationProvider
            queryFn={() => getArticle(groupId, articleId)}
            queryKey={Keys.getArticle(groupId, articleId)}
          >
            <ArticleDetail />
          </HydrationProvider>
        </PageAnimation>
      </QueryAsyncBoundary>
      <Spacing size={100} />
      <CommentForm />
      <Spacing size={60} />
    </>
  );
}
