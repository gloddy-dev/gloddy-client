import ProfileDetail from './components/ProfileDetail.client';
import ProfileHeader from './components/ProfileHeader.client';
import { Keys, getProfile } from '@/apis/profile';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Footer } from '@/components/Footer';
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
      <QueryAsyncBoundary rejectedFallback={RejectedFallback}>
        <HydrationProvider queryFn={getProfile} queryKey={Keys.getProfile()}>
          <ProfileDetail />
          <Spacing size={70} />
        </HydrationProvider>
      </QueryAsyncBoundary>
      <Footer page="profile" isSpacing={false} lng={lng} />
    </>
  );
}
