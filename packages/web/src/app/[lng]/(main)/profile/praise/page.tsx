import { ErrorBoundary } from 'react-error-boundary';

import PraiseHeader from './components/PraiseHeader';
import ProfilePraiseDetail from './components/ProfilePraiseDetail';

import { Keys, getPraises } from '@/apis/profile';
import { ErrorFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

export default function PraisePage() {
  return (
    <>
      <PraiseHeader />
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <HydrationProvider queryKey={Keys.getPraises()} queryFn={getPraises}>
          <ProfilePraiseDetail />
        </HydrationProvider>
      </ErrorBoundary>
    </>
  );
}
