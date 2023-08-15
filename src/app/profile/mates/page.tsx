import ProfileMatesDetail from './components/ProfileMatesDetail.client';
import ProfileMatesHeader from './components/ProfileMatesHeader.client';
import { Keys, getMates } from '@/apis/profile';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function MatesPage() {
  return (
    <>
      <ProfileMatesHeader />
      <QueryAsyncBoundary rejectedFallback={<div>에러</div>} pendingFallback={null}>
        <HydrationProvider queryKey={Keys.getMates()} queryFn={getMates}>
          <ProfileMatesDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </>
  );
}
