import PraiseHeader from './components/PraiseHeader.client';
import ProfilePraiseDetail from './components/ProfilePraiseDetail.client';
import { Keys, getPraises } from '@/apis/profile';
import LocalErrorSuspenseBoundary from '@/components/ErrorBoundary/LocalErrorSuspenseBoundary';
import { HydrationProvider } from '@/components/Provider';

export default function PraisePage() {
  return (
    <>
      <PraiseHeader />
      <LocalErrorSuspenseBoundary>
        <HydrationProvider queryKey={Keys.getPraises()} queryFn={getPraises}>
          <ProfilePraiseDetail />
        </HydrationProvider>
      </LocalErrorSuspenseBoundary>
    </>
  );
}
