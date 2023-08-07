import PraiseDetail from './components/PraiseDetail.client';
import ProfilePraiseTopNavigationBar from './components/ProfilePraiseTopNavigationBar.client';
import { Keys, getPraises } from '@/apis/profile';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function PraisePage() {
  return (
    <>
      <ProfilePraiseTopNavigationBar />
      <QueryAsyncBoundary rejectedFallback={<div>에러</div>} pendingFallback={null}>
        <HydrationProvider queryKey={Keys.getPraises()} queryFn={getPraises}>
          <PraiseDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </>
  );
}
