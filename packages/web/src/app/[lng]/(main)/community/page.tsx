import { ErrorBoundary } from 'react-error-boundary';

import CommunityHeader from './components/CommunityHeader';
import ContentSection from './components/ContentSection';
import CreateArticleButton from './components/CreateArticleButton';

import { Keys, getCommunityArticles } from '@/apis/community';
import { ErrorFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';

interface CommunityPageProps {
  params: {
    lng: string;
  };
}

export default function CommunityPage({ params: { lng } }: CommunityPageProps) {
  return (
    <>
      <CommunityHeader lng={lng} />
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <HydrationProvider
          queryFn={() => getCommunityArticles({ categoryId: 0, pageParam: 0 })}
          queryKey={Keys.getCommunityArticles(0)}
          isInfiniteQuery
        >
          <ContentSection />
        </HydrationProvider>
      </ErrorBoundary>
      <CreateArticleButton />
      <Spacing size={60} />
    </>
  );
}
