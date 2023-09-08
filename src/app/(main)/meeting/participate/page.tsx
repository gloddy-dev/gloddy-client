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
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';
import { Loading } from 'antd-mobile';
import { redirect } from 'next/navigation';

interface MeetingPageProps {
  searchParams: {
    tab?: string;
  };
}

export default function MeetingPage({ searchParams }: MeetingPageProps) {
  if (!searchParams?.tab) redirect(`/meeting/participate?tab=participating`);

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
      </QueryAsyncBoundary>
      <Footer page="meeting" />
    </>
  );
}
