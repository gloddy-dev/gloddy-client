import ProfileEdit from './components/ProfileEdit.client';
import { Keys, getProfile } from '@/apis/profile';
import LocalErrorSuspenseBoundary from '@/components/ErrorBoundary/LocalErrorSuspenseBoundary';
import { HydrationProvider } from '@/components/Provider';

export default function page() {
  return (
    <LocalErrorSuspenseBoundary>
      <HydrationProvider queryKey={Keys.getProfile()} queryFn={getProfile}>
        <ProfileEdit />
      </HydrationProvider>
    </LocalErrorSuspenseBoundary>
  );
}
