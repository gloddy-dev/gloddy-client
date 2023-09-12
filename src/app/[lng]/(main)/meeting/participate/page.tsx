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
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function MeetingPage() {
  return (
    <>
      <MeetingParticipateHeader />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
        <PageAnimation>
          <HydrationProvider
            queryMultipleFn={[
              getMeetingParticipating,
              getMeetingHosting,
              getMeetingRejected,
              getMeetingNotEstimated,
              getMeetingNotEstimated,
            ]}
            queryKey={[
              Keys.getMeetingParticipating(),
              Keys.getMeetingHosting(),
              Keys.getMeetingRejected(),
              Keys.getMeetingNotEstimated(),
              Keys.getMeetingNotEstimated(),
            ]}
          >
            <ContentSection />
          </HydrationProvider>
        </PageAnimation>
      </QueryAsyncBoundary>
      <Footer page="meeting" />
    </>
  );
}
