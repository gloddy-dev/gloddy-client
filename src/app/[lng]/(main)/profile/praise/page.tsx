import PraiseHeader from './components/PraiseHeader.client';
import ProfilePraiseDetail from './components/ProfilePraiseDetail.client';
import { Keys, getPraises } from '@/apis/profile';
import LocalApiAsyncBoundary from '@/components/ErrorBoundary/LocalApiAsyncBoundary';
import { HydrationProvider } from '@/components/Provider';

export default function PraisePage() {
  return (
    <>
      <PraiseHeader />
      <LocalApiAsyncBoundary>
        <HydrationProvider queryKey={Keys.getPraises()} queryFn={getPraises}>
          <ProfilePraiseDetail />
        </HydrationProvider>
      </LocalApiAsyncBoundary>
    </>
  );
}
