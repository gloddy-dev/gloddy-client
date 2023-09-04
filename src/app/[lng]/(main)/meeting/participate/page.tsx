import ContentSection from './components/ContentSection.client';
import MeetingParticipateHeader from './components/MeetingParticipateHeader';
import {
  Keys,
  getMeetingHosting,
  getMeetingNotEstimated,
  getMeetingParticipating,
  getMeetingRejected,
} from '@/apis/meeting';
import { HydrationProvider } from '@/components/common/Provider';
import { Footer } from '@/components/Footer';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

interface MeetingPageProps {
  params: {
    lng: string;
  };
  searchParams: {
    tab?: string;
  };
}

export default function MeetingPage({ params: { lng }, searchParams }: MeetingPageProps) {
  if (!searchParams?.tab) redirect(`/${lng}/meeting/participate?tab=participating`);

  return (
    <>
      <MeetingParticipateHeader />
      <Suspense fallback={null}>
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
        <Footer page="meeting" />
      </Suspense>
    </>
  );
}
