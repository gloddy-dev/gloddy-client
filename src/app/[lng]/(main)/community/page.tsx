import CommunityHeader from './components/CommunityHeader';
import ContentSection from './components/ContentSection.client';
import { Footer } from '@/components/Footer';
import { Spacing } from '@/components/Spacing';

interface CommunityPageProps {
  params: {
    lng: string;
  };
}

export default function CommunityPage({ params: { lng } }: CommunityPageProps) {
  return (
    <>
      <CommunityHeader lng={lng} />
      <ContentSection />
      <Spacing size={60} />
      <Footer page="community" lng={lng} />
    </>
  );
}
