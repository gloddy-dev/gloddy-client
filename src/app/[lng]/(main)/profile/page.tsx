import ProfileDetail from './components/ProfileDetail.client';
import ProfileHeader from './components/ProfileHeader.client';
import { Keys, getProfile } from '@/apis/profile';
import { Footer } from '@/components/Footer';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { Suspense } from 'react';

interface ProfilePageProps {
  params: {
    lng: string;
  };
}

export default function Profile({ params: { lng } }: ProfilePageProps) {
  return (
    <>
      <ProfileHeader />
      <Suspense fallback={<Loading />}>
        <HydrationProvider queryFn={getProfile} queryKey={Keys.getProfile()}>
          <ProfileDetail />
        </HydrationProvider>
      </Suspense>
      <Footer page="profile" isSpacing={false} lng={lng} />
    </>
  );
}
