import { Spacing } from '@/components/Spacing';
import CommunityHeader from './components/CommunityHeader';
import ContentSection from './components/ContentSection.client';
import { PageAnimation } from '@/components/PageAnimation';
import { Footer } from '@/components/Footer';

interface CommunityPageProps {
  params: {
    lng: string;
  };
}

export default function CommunityPage({ params: { lng } }: CommunityPageProps) {
  return (
    <>
      <CommunityHeader lng={lng} />
      <PageAnimation>
        <ContentSection />
      </PageAnimation>
      <Spacing size={60} />
      <Footer page="community" lng={lng} />
    </>
  );
}
