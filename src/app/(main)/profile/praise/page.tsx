import PraiseHeader from './components/PraiseHeader';
import ProfilePraiseDetail from './components/ProfilePraiseDetail.client';
import { Keys, getPraises } from '@/apis/profile';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function PraisePage() {
  return (
    <>
      <PraiseHeader />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
        <HydrationProvider queryKey={Keys.getPraises()} queryFn={getPraises}>
          <ProfilePraiseDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </>
  );
}
