import ProfilePraiseDetail from './components/ProfilePraiseDetail.client';
import ProfilePraiseHeader from './components/ProfilePraiseHeader.client';
import { Keys, getPraises } from '@/apis/profile';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function PraisePage() {
  return (
    <>
      <ProfilePraiseHeader />
      <QueryAsyncBoundary rejectedFallback={<div>에러</div>} pendingFallback={null}>
        <HydrationProvider queryKey={Keys.getPraises()} queryFn={getPraises}>
          <ProfilePraiseDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </>
  );
}
