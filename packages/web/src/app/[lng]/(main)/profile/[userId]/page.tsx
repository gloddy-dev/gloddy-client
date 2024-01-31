import ProfileByIdDetail from './components/ProfileByIdDetail.client';
import ProfileByIdHeader from './components/ProfileByIdHeader';
import { Keys, getProfileById } from '@/apis/profile';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

interface PageProps {
  params: {
    userId: string;
  };
}

export default function page({ params }: PageProps) {
  const userId = Number(params.userId);

  return (
    <LocalSuspenseErrorBoundary>
      <HydrationProvider
        queryFn={() => getProfileById(userId)}
        queryKey={Keys.getProfileById(userId)}
      >
        <ProfileByIdHeader />
        <ProfileByIdDetail />
      </HydrationProvider>
    </LocalSuspenseErrorBoundary>
  );
}
