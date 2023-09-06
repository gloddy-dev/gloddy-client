import ProfileDetail from './components/ProfileDetail.client';
import ProfileHeader from './components/ProfileHeader.client';
import { Keys, getProfile } from '@/apis/profile';
import { Footer } from '@/components/Footer';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';
import { Suspense } from 'react';

export default function Profile() {
  return (
    <>
      <ProfileHeader />
      <Suspense fallback={<Loading className="h-[calc(100dvh-118px)]" />}>
        <PageAnimation className="bg-sub">
          <HydrationProvider queryFn={getProfile} queryKey={Keys.getProfile()}>
            <ProfileDetail />
            <Spacing size={70} />
          </HydrationProvider>
        </PageAnimation>
      </Suspense>
      <Footer page="profile" isSpacing={false} />
    </>
  );
}
