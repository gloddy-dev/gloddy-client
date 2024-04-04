import { ErrorBoundary } from 'react-error-boundary';

import ContentSection from './components/ContentSection';
import MeetingParticipateHeader from './components/MeetingParticipateHeader';

import {
  Keys,
  getMeetingHosting,
  getMeetingNotEstimated,
  getMeetingParticipating,
  getMeetingRejected,
  getMeetingWaiting,
} from '@/apis/meeting';
import { ErrorFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

interface MeetingPageProps {
  params: {
    lng: string;
  };
}

export default function MeetingPage({ params: { lng } }: MeetingPageProps) {
  return (
    <>
      <MeetingParticipateHeader lng={lng} />
      <ErrorBoundary fallbackRender={ErrorFallback}>
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
      </ErrorBoundary>
    </>
  );
}
