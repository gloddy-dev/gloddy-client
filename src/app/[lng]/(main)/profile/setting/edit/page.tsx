import ProfileEdit from './components/ProfileEdit.client';
import { Keys, getProfile } from '@/apis/profile';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { Suspense } from 'react';

export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <HydrationProvider queryKey={Keys.getProfile()} queryFn={getProfile}>
        <ProfileEdit />
      </HydrationProvider>
    </Suspense>
  );
}
