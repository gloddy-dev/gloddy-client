import ProfileMatesDetail from './components/MatesDetail.client';
import MatesHeader from './components/MatesHeader';
import { Keys, getMates } from '@/apis/profile';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';
import { Loading } from 'antd-mobile';

export default function MatesPage() {
  return (
    <>
      <MatesHeader />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
        <HydrationProvider queryKey={Keys.getMates()} queryFn={getMates}>
          <ProfileMatesDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </>
  );
}
