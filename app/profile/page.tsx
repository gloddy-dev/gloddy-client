import ProfileDetail from './components/ProfileDetail.client';
import ProfileTopNavigationBar from './components/ProfileTopNavigationBar.client';
import { Keys, getProfile } from '@/apis/profile';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function Profile() {
  return (
    <>
      <ProfileTopNavigationBar />
      <QueryAsyncBoundary rejectedFallback={<div>에러</div>} pendingFallback={null}>
        <HydrationProvider queryFn={getProfile} queryKey={Keys.getProfile()}>
          <ProfileDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </>
  );
}
