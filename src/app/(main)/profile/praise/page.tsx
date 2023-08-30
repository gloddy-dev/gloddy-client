import PraiseHeader from './components/PraiseHeader';
import ProfilePraiseDetail from './components/ProfilePraiseDetail.client';
import { Keys, getPraises } from '@/apis/profile';
import { HydrationProvider } from '@/components/common/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function PraisePage() {
  return (
    <>
      <PraiseHeader />
      <QueryAsyncBoundary rejectedFallback={<div>에러</div>} pendingFallback={null}>
        <HydrationProvider queryKey={Keys.getPraises()} queryFn={getPraises}>
          <ProfilePraiseDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </>
  );
}
