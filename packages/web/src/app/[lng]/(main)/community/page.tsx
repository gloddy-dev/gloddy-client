import CommunityHeader from './components/CommunityHeader';
import ContentSection from './components/ContentSection';
import CreateArticleButton from './components/CreateArticleButton';

import { Keys, getCommunityArticles } from '@/apis/community';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
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
      <LocalSuspenseErrorBoundary>
        <HydrationProvider
          queryFn={() => getCommunityArticles({ categoryId: 0, pageParam: 0 })}
          queryKey={Keys.getCommunityArticles(0)}
          isInfiniteQuery
        >
          <ContentSection />
        </HydrationProvider>
      </LocalSuspenseErrorBoundary>
      <CreateArticleButton />
      <Spacing size={60} />
      <Footer page="community" lng={lng} />
    </>
  );
}
