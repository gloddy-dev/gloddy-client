import ProfileEdit from './components/ProfileEdit.client';
import { Keys, getProfile } from '@/apis/profile';
import LocalApiAsyncBoundary from '@/components/ErrorBoundary/LocalApiAsyncBoundary';
import { HydrationProvider } from '@/components/Provider';

export default function page() {
  return (
    <LocalApiAsyncBoundary>
      <HydrationProvider queryKey={Keys.getProfile()} queryFn={getProfile}>
        <ProfileEdit />
      </HydrationProvider>
    </LocalApiAsyncBoundary>
  );
}
