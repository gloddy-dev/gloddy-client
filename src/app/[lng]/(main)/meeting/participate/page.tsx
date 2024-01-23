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
import { Footer } from '@/components/Footer';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { Suspense } from 'react';

interface MeetingPageProps {
  params: {
    lng: string;
  };
}

export default function MeetingPage({ params: { lng } }: MeetingPageProps) {
  return (
    <>
      <MeetingParticipateHeader />
      <Suspense fallback={<Loading />}>
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
      </Suspense>
      <Footer page="meeting" lng={lng} />
    </>
  );
}
