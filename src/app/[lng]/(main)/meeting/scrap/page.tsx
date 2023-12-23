import ContentSection from './components/ContentSection.client';
import MeetingScrapHeader from './components/MeetingScrapHeader';
import { Keys, getMeetingScrap } from '@/apis/meeting';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Loading } from '@/components/Loading';

import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface MeetingPageProps {
  params: {
    lng: string;
  };
}

export default function MeetingPage({ params: { lng } }: MeetingPageProps) {
  return (
    <>
      <MeetingScrapHeader />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
        <HydrationProvider queryFn={getMeetingScrap} queryKey={Keys.getMeetingScraps()}>
          <ContentSection />
        </HydrationProvider>
      </QueryAsyncBoundary>
      <Footer page="meeting" lng={lng} />
    </>
  );
}
