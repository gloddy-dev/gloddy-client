import ContentSection from './components/ContentSection.client';
import MeetingScrapHeader from './components/MeetingScrapHeader';
import { Keys, getMeetingScrap } from '@/apis/meeting';
import LocalErrorSuspenseBoundary from '@/components/ErrorBoundary/LocalErrorSuspenseBoundary';
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
      <MeetingScrapHeader />
      <LocalErrorSuspenseBoundary>
        <HydrationProvider queryFn={getMeetingScrap} queryKey={Keys.getMeetingScraps()}>
          <ContentSection />
        </HydrationProvider>
      </LocalErrorSuspenseBoundary>
      <Footer page="meeting" lng={lng} />
    </>
  );
}
