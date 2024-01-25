import CommunityHeader from './components/CommunityHeader';
import ContentSection from './components/ContentSection.client';
import { Keys, getCommunityArticles } from '@/apis/community';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Footer = dynamic(() => import('@/components/Footer/Footer.server'), { ssr: false });
interface CommunityPageProps {
  params: {
    lng: string;
  };
}

export default function CommunityPage({ params: { lng } }: CommunityPageProps) {
  return (
    <>
      <CommunityHeader lng={lng} />
      <Suspense fallback={<Loading />}>
        <HydrationProvider
          queryMultipleFn={[
            () => getCommunityArticles({ categoryId: 0, pageParam: 0 }),
            () => getCommunityArticles({ categoryId: 1, pageParam: 0 }),
            () => getCommunityArticles({ categoryId: 2, pageParam: 0 }),
            () => getCommunityArticles({ categoryId: 3, pageParam: 0 }),
          ]}
          queryMultipleKey={[
            Keys.getCommunityArticles(0),
            Keys.getCommunityArticles(1),
            Keys.getCommunityArticles(2),
            Keys.getCommunityArticles(3),
          ]}
          isInfiniteQuery
        >
          <ContentSection />
        </HydrationProvider>
      </Suspense>
      <Spacing size={60} />
      <Footer page="community" lng={lng} />
    </>
  );
}
