import ContentSection from './components/ContentSection';
import MeetingScrapHeader from './components/MeetingScrapHeader';

import { Keys, getMeetingScrap } from '@/apis/meeting';
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
      <MeetingScrapHeader lng={lng} />
      <LocalSuspenseErrorBoundary>
        <HydrationProvider queryFn={getMeetingScrap} queryKey={Keys.getMeetingScraps()}>
          <ContentSection lng={lng} />
        </HydrationProvider>
      </LocalSuspenseErrorBoundary>
      <Footer page="meeting" lng={lng} />
    </>
  );
}
