import ProfileDetail from './components/ProfileDetail.client';
import ProfileHeader from './components/ProfileHeader.client';
import { Keys, getProfile } from '@/apis/profile';
import { HydrationProvider } from '@/components/common/Provider';
import { Footer } from '@/components/Footer';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function Profile() {
  return (
    <div className="h-full bg-sub">
      <ProfileHeader />
      <QueryAsyncBoundary rejectedFallback={<div>에러</div>} pendingFallback={null}>
        <HydrationProvider queryFn={getProfile} queryKey={Keys.getProfile()}>
          <ProfileDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
      <Footer page="profile" />
    </div>
  );
}
