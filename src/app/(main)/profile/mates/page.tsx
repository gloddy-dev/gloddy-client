import ProfileMatesDetail from './components/MatesDetail.client';
import MatesHeader from './components/MatesHeader';
import { Keys, getMates } from '@/apis/profile';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function MatesPage() {
  return (
    <>
      <MatesHeader />
      <QueryAsyncBoundary rejectedFallback={<div>에러</div>} pendingFallback={null}>
        <HydrationProvider queryKey={Keys.getMates()} queryFn={getMates}>
          <ProfileMatesDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </>
  );
}
