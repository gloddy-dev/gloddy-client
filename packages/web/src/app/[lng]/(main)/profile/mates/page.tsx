import { ErrorBoundary } from 'react-error-boundary';

import ProfileMatesDetail from './components/MatesDetail';
import MatesHeader from './components/MatesHeader';

import { Keys, getMates } from '@/apis/profile';
import { ErrorFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

export default function MatesPage() {
  return (
    <>
      <MatesHeader />
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <HydrationProvider queryKey={Keys.getMates()} queryFn={getMates}>
          <ProfileMatesDetail />
        </HydrationProvider>
      </ErrorBoundary>
    </>
  );
}
