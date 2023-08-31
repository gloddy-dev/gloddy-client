import ContentSection from './components/ContentSection.client';
import MeetingHeader from './components/MeetingHeader';
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
  searchParams: {
    tab?: string;
  };
}

export default function MeetingPage({ searchParams }: MeetingPageProps) {
  if (!searchParams?.tab) redirect(`/meeting?tab=participating`);

  return (
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
        <MeetingHeader />
        <ContentSection />
        <Footer page="meeting" />
      </HydrationProvider>
    </Suspense>
  );
}
