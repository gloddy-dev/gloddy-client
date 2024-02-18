import ContentSection from './components/ContentSection.client';
import MeetingScrapHeader from './components/MeetingScrapHeader';
import { Keys, getMeetingScrap } from '@/apis/meeting';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
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
      <MeetingScrapHeader />
      <LocalSuspenseErrorBoundary>
        <HydrationProvider queryFn={getMeetingScrap} queryKey={Keys.getMeetingScraps()}>
          <ContentSection />
        </HydrationProvider>
      </LocalSuspenseErrorBoundary>
      <Footer page="meeting" lng={lng} />
    </>
  );
}
