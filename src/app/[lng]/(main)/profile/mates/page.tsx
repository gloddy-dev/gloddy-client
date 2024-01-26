import ProfileMatesDetail from './components/MatesDetail.client';
import MatesHeader from './components/MatesHeader.client';
import { Keys, getMates } from '@/apis/profile';
import LocalApiAsyncBoundary from '@/components/ErrorBoundary/LocalApiAsyncBoundary';
import { HydrationProvider } from '@/components/Provider';

export default function MatesPage() {
  return (
    <>
      <MatesHeader />
      <LocalApiAsyncBoundary>
        <HydrationProvider queryKey={Keys.getMates()} queryFn={getMates}>
          <ProfileMatesDetail />
        </HydrationProvider>
      </LocalApiAsyncBoundary>
    </>
  );
}
