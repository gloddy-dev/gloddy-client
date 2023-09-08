import ProfileEdit from './components/ProfileEdit.client';
import { Keys, getProfile } from '@/apis/profile';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';
import { Loading } from 'antd-mobile';

export default function page() {
  return (
    <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
      <HydrationProvider queryKey={Keys.getProfile()} queryFn={getProfile}>
        <ProfileEdit />
      </HydrationProvider>
    </QueryAsyncBoundary>
  );
}
