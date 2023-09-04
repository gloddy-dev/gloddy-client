import ContentSection from './components/ContentSection.client';
import MeetingBookmarkHeader from './components/MeetingBookmarkHeader';
import { Footer } from '@/components/Footer';

export default function MeetingPage() {
  return (
    <>
      <MeetingBookmarkHeader />
      <ContentSection />
      <Footer page="meeting" />
    </>
  );
}
