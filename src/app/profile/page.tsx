import ProfileDetail from './components/ProfileDetail.client';
import ProfileHeader from './components/ProfileHeader.client';
import { Keys, getProfile } from '@/apis/profile';
import { BottomNavigationBar } from '@/components/common/NavigationBar';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function Profile() {
  return (
    <>
      <ProfileHeader />
      <QueryAsyncBoundary rejectedFallback={<div>에러</div>} pendingFallback={null}>
        <HydrationProvider queryFn={getProfile} queryKey={Keys.getProfile()}>
          <ProfileDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
      <BottomNavigationBar page="profile" />
    </>
  );
}
