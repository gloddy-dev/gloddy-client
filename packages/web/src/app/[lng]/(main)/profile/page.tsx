import { ErrorBoundary } from 'react-error-boundary';

import ProfileDetail from './components/ProfileDetail';
import ProfileHeader from './components/ProfileHeader';

import { Keys, getProfile } from '@/apis/profile';
import { ErrorFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

interface ProfilePageProps {
  params: {
    lng: string;
  };
}

export default function Profile({ params: { lng } }: ProfilePageProps) {
  return (
    <>
      <ProfileHeader />
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <HydrationProvider queryFn={getProfile} queryKey={Keys.getProfile()}>
          <ProfileDetail />
        </HydrationProvider>
      </ErrorBoundary>
    </>
  );
}
