import CommunityHeader from './components/CommunityHeader';
import ContentSection from './components/ContentSection.client';
import { FloatAddButton } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { NavLink } from '@/components/NavLink';
import { Spacing } from '@/components/Spacing';
import useAppRouter from '@/hooks/useAppRouter';

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
