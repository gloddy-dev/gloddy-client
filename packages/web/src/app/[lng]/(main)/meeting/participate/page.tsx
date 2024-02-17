import ContentSection from './components/ContentSection.client';
import MeetingParticipateHeader from './components/MeetingParticipateHeader';

import {
  Keys,
  getMeetingHosting,
  getMeetingNotEstimated,
  getMeetingParticipating,
  getMeetingRejected,
  getMeetingWaiting,
} from '@/apis/meeting';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { HydrationProvider } from '@/components/Provider';

interface MeetingPageProps {
  params: {
    lng: string;
  };
}

export default function MeetingPage({ params: { lng } }: MeetingPageProps) {
  return (
    <>
      <MeetingParticipateHeader />
      <LocalSuspenseErrorBoundary>
        <HydrationProvider
          queryMultipleFn={[
            getMeetingParticipating,
            getMeetingHosting,
            getMeetingRejected,
            getMeetingNotEstimated,
            getMeetingWaiting,
          ]}
          queryMultipleKey={[
            Keys.getMeetingParticipating(),
            Keys.getMeetingHosting(),
            Keys.getMeetingRejected(),
            Keys.getMeetingNotEstimated(),
            Keys.getMeetingWaiting(),
          ]}
        >
          <ContentSection />
        </HydrationProvider>
      </LocalSuspenseErrorBoundary>
      <Footer page="meeting" lng={lng} />
    </>
  );
}
