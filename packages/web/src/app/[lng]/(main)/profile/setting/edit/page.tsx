import ProfileEdit from './components/ProfileEdit';

import { Keys, getProfile } from '@/apis/profile';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

export default async function page() {
  return (
    <LocalSuspenseErrorBoundary>
      <HydrationProvider queryKey={Keys.getProfile()} queryFn={getProfile}>
        <ProfileEdit />
      </HydrationProvider>
    </LocalSuspenseErrorBoundary>
  );
}
