import ProfileEdit from './components/ProfileEdit.client';
import { Keys, getProfile } from '@/apis/profile';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function page() {
  return (
    <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={null}>
      <HydrationProvider queryKey={Keys.getProfile()} queryFn={getProfile}>
        <ProfileEdit />
      </HydrationProvider>
    </QueryAsyncBoundary>
  );
}
