import ProfileMatesDetail from './components/MatesDetail.client';
import MatesHeader from './components/MatesHeader.client';
import { Keys, getMates } from '@/apis/profile';
import LocalErrorSuspenseBoundary from '@/components/ErrorBoundary/LocalErrorSuspenseBoundary';
import { HydrationProvider } from '@/components/Provider';

export default function MatesPage() {
  return (
    <>
      <MatesHeader />
      <LocalErrorSuspenseBoundary>
        <HydrationProvider queryKey={Keys.getMates()} queryFn={getMates}>
          <ProfileMatesDetail />
        </HydrationProvider>
      </LocalErrorSuspenseBoundary>
    </>
  );
}
