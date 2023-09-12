import ProfileMatesDetail from './components/MatesDetail.client';
import MatesHeader from './components/MatesHeader';
import { Keys, getMates } from '@/apis/profile';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function MatesPage() {
  return (
    <>
      <MatesHeader />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
        <PageAnimation>
          <HydrationProvider queryKey={Keys.getMates()} queryFn={getMates}>
            <ProfileMatesDetail />
          </HydrationProvider>
        </PageAnimation>
      </QueryAsyncBoundary>
    </>
  );
}
