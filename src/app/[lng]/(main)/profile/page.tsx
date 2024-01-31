import ProfileDetail from './components/ProfileDetail.client';
import ProfileHeader from './components/ProfileHeader.client';
import { Keys, getProfile } from '@/apis/profile';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });

interface ProfilePageProps {
  params: {
    lng: string;
  };
}

export default function Profile({ params: { lng } }: ProfilePageProps) {
  return (
    <>
      <ProfileHeader />
      <HydrationProvider queryFn={getProfile} queryKey={Keys.getProfile()}>
        <ProfileDetail />
        <Spacing size={70} />
      </HydrationProvider>
      <Footer page="profile" isSpacing={false} lng={lng} />
    </>
  );
}
