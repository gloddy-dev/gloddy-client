import CommunityHeader from './components/CommunityHeader';
import ContentSection from './components/ContentSection.client';
import { FloatAddButton } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { NavLink } from '@/components/NavLink';
import { PageAnimation } from '@/components/PageAnimation';
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
      <PageAnimation>
        <ContentSection />
      </PageAnimation>
      <div className="fixed inset-x-0 bottom-0 mx-auto h-70 max-w-450">
        <NavLink href="/community/write">
          <FloatAddButton className="absolute bottom-90 right-20 ml-auto" />
        </NavLink>
      </div>
      <Spacing size={60} />
      <Footer page="community" lng={lng} />
    </>
  );
}
