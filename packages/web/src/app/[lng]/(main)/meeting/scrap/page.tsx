import { ErrorBoundary } from 'react-error-boundary';

import ContentSection from './components/ContentSection';
import MeetingScrapHeader from './components/MeetingScrapHeader';

import { Keys, getMeetingScrap } from '@/apis/meeting';
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
      <MeetingScrapHeader lng={lng} />
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <HydrationProvider queryFn={getMeetingScrap} queryKey={Keys.getMeetingScraps()}>
          <ContentSection />
        </HydrationProvider>
      </ErrorBoundary>
    </>
  );
}
