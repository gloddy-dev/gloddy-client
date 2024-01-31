import PraiseHeader from './components/PraiseHeader.client';
import ProfilePraiseDetail from './components/ProfilePraiseDetail.client';
import { Keys, getPraises } from '@/apis/profile';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

export default function PraisePage() {
  return (
    <>
      <PraiseHeader />
      <LocalSuspenseErrorBoundary>
        <HydrationProvider queryKey={Keys.getPraises()} queryFn={getPraises}>
          <ProfilePraiseDetail />
        </HydrationProvider>
      </LocalSuspenseErrorBoundary>
    </>
  );
}
