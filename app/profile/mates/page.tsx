import ProfileMatesDetail from './components/ProfileMatesDetail.client';
import ProfileMatesTopNavigationBar from './components/ProfileMatesTopNavigationBar.client';
import { Keys, getMates } from '@/apis/profile';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function MatesPage() {
  return (
    <>
      <ProfileMatesTopNavigationBar />
      <QueryAsyncBoundary rejectedFallback={<div>에러</div>} pendingFallback={null}>
        <HydrationProvider queryKey={Keys.getMates()} queryFn={getMates}>
          <ProfileMatesDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </>
  );
}
