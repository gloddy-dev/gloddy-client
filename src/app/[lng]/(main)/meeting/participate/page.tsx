import ContentSection from './components/ContentSection.client';
import MeetingParticipateHeader from './components/MeetingParticipateHeader';
import {
  Keys,
  getMeetingHosting,
  getMeetingNotEstimated,
  getMeetingParticipating,
  getMeetingRejected,
} from '@/apis/meeting';
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
      <MeetingParticipateHeader />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
        
          <HydrationProvider
            queryMultipleFn={[
              getMeetingParticipating,
              getMeetingHosting,
              getMeetingRejected,
              getMeetingNotEstimated,
            ]}
            queryMultipleKey={[
              Keys.getMeetingParticipating(),
              Keys.getMeetingHosting(),
              Keys.getMeetingRejected(),
              Keys.getMeetingNotEstimated(),
            ]}
          >
            <ContentSection />
          </HydrationProvider>
        
      </QueryAsyncBoundary>
      <Footer page="meeting" lng={lng} />
    </>
  );
}
