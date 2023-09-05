import ContentSection from './components/ContentSection.client';
import MeetingParticipateHeader from './components/MeetingParticipateHeader';
import {
  Keys,
  getMeetingHosting,
  getMeetingNotEstimated,
  getMeetingParticipating,
  getMeetingRejected,
} from '@/apis/meeting';
import { HydrationProvider } from '@/components/Provider';
import { Footer } from '@/components/Footer';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

interface MeetingPageProps {
  searchParams: {
    tab?: string;
  };
}

export default function MeetingPage({ searchParams }: MeetingPageProps) {
  if (!searchParams?.tab) redirect(`/meeting/participate?tab=participating`);

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
      </Suspense>
      <Footer page="meeting" />
    </>
  );
}
