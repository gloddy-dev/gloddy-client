import ProfileMatesDetail from './components/MatesDetail.client';
import MatesHeader from './components/MatesHeader.client';
import { Keys, getMates } from '@/apis/profile';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { Suspense } from 'react';

export default function MatesPage() {
  return (
    <>
      <MatesHeader />
      <Suspense fallback={<Loading />}>
        <HydrationProvider queryKey={Keys.getMates()} queryFn={getMates}>
          <ProfileMatesDetail />
        </HydrationProvider>
      </Suspense>
    </>
  );
}
