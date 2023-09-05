import ProfileDetail from './components/ProfileDetail.client';
import ProfileHeader from './components/ProfileHeader.client';
import { Keys, getProfile } from '@/apis/profile';
import { Footer } from '@/components/Footer';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function Profile() {
  return (
    <>
      <ProfileHeader />
      <QueryAsyncBoundary
        rejectedFallback={<div>에러</div>}
        pendingFallback={<Loading className="h-300" />}
      >
        <PageAnimation>
          <HydrationProvider queryFn={getProfile} queryKey={Keys.getProfile()}>
            <ProfileDetail />
          </HydrationProvider>
        </PageAnimation>
      </QueryAsyncBoundary>
      <Footer page="profile" spacingColor="#F7F7FA" />
    </>
  );
}
