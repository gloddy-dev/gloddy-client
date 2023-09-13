import ProfileDetail from './components/ProfileDetail.client';
import ProfileHeader from './components/ProfileHeader.client';
import { Keys, getProfile } from '@/apis/profile';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface ProfilePageProps {
  params: {
    lng: string;
  };
}

export default function Profile({ params: { lng } }: ProfilePageProps) {
  return (
    <>
      <ProfileHeader />
      <QueryAsyncBoundary
        rejectedFallback={RejectedFallback}
        pendingFallback={<Loading className="h-[calc(100dvh-118px)]" />}
      >
        <PageAnimation className="bg-sub">
          <HydrationProvider queryFn={getProfile} queryKey={Keys.getProfile()}>
            <ProfileDetail />
            <Spacing size={70} />
          </HydrationProvider>
        </PageAnimation>
      </QueryAsyncBoundary>
      <Footer page="profile" isSpacing={false} lng={lng} />
    </>
  );
}
