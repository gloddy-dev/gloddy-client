import ProfileMatesDetail from './components/MatesDetail.client';
import MatesHeader from './components/MatesHeader.client';
import { Keys, getMates } from '@/apis/profile';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

export default function MatesPage() {
  return (
    <>
      <MatesHeader />
      <LocalSuspenseErrorBoundary>
        <HydrationProvider queryKey={Keys.getMates()} queryFn={getMates}>
          <ProfileMatesDetail />
        </HydrationProvider>
      </LocalSuspenseErrorBoundary>
    </>
  );
}
