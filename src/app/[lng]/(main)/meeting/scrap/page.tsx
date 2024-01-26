import ContentSection from './components/ContentSection.client';
import MeetingScrapHeader from './components/MeetingScrapHeader';
import { Keys, getMeetingScrap } from '@/apis/meeting';
import LocalApiAsyncBoundary from '@/components/ErrorBoundary/LocalApiAsyncBoundary';
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
      <LocalApiAsyncBoundary>
        <HydrationProvider queryFn={getMeetingScrap} queryKey={Keys.getMeetingScraps()}>
          <ContentSection />
        </HydrationProvider>
      </LocalApiAsyncBoundary>
      <Footer page="meeting" lng={lng} />
    </>
  );
}
