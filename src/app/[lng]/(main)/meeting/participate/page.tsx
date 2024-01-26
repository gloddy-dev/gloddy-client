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
import LocalApiAsyncBoundary from '@/components/ErrorBoundary/LocalApiAsyncBoundary';
import { HydrationProvider } from '@/components/Provider';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });
interface MeetingPageProps {
  params: {
    lng: string;
  };
}

export default function MeetingPage({ params: { lng } }: MeetingPageProps) {
  return (
    <>
      <MeetingParticipateHeader />
      <LocalApiAsyncBoundary>
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
      </LocalApiAsyncBoundary>
      <Footer page="meeting" lng={lng} />
    </>
  );
}
