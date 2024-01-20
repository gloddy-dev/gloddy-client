import PraiseHeader from './components/PraiseHeader.client';
import ProfilePraiseDetail from './components/ProfilePraiseDetail.client';
import { Keys, getPraises } from '@/apis/profile';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { Suspense } from 'react';

export default function PraisePage() {
  return (
    <>
      <PraiseHeader />
      <Suspense fallback={<Loading />}>
        <HydrationProvider queryKey={Keys.getPraises()} queryFn={getPraises}>
          <ProfilePraiseDetail />
        </HydrationProvider>
      </Suspense>
    </>
  );
}
