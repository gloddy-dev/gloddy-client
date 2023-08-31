import ContentSection from './components/ContentSection.client';
import MeetingHeader from './components/MeetingHeader';
import { Footer } from '@/components/Footer';
import { redirect } from 'next/navigation';
import React from 'react';

interface MeetingPageProps {
  searchParams: {
    tab?: string;
  };
}

export default function MeetingPage({ searchParams }: MeetingPageProps) {
  if (!searchParams?.tab) redirect(`/meeting?tab=participating`);

  return (
    <div>
      <MeetingHeader />
      <ContentSection />
      <Footer page="meeting" />
    </div>
  );
}
