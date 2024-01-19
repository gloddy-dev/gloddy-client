import ProfileDetail from './components/ProfileDetail.client';
import ProfileHeader from './components/ProfileHeader.client';
import { Keys, getProfile } from '@/apis/profile';
import { Footer } from '@/components/Footer';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';

interface ProfilePageProps {
  params: {
    lng: string;
  };
}

export default function Profile({ params: { lng } }: ProfilePageProps) {
  return (
    <>
      {/* <ProfileHeader /> */}
      <ProfileDetail />
      {/* <Spacing size={70} /> */}
      {/* <Footer page="profile" isSpacing={false} lng={lng} /> */}
    </>
  );
}
