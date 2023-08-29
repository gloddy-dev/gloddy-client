import IntroduceSection from './components/IntroduceSection.client';
import ProfileHeader from './components/ProfileHeader.client';
import ProfileSection from './components/ProfileSection.client';
import { Keys, getProfile } from '@/apis/profile';
import { BottomNavigationBar } from '@/components/common/NavigationBar';
import { HydrationProvider } from '@/components/common/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function Profile() {
  return (
    <div className="h-full bg-sub">
      <ProfileHeader />
      <QueryAsyncBoundary rejectedFallback={<div>에러</div>} pendingFallback={null}>
        <HydrationProvider queryFn={getProfile} queryKey={Keys.getProfile()}>
          <ProfileSection />
          <IntroduceSection />
        </HydrationProvider>
      </QueryAsyncBoundary>
      <BottomNavigationBar page="profile" />
    </div>
  );
}
