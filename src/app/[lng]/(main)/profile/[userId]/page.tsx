import ProfileByIdDetail from './components/ProfileByIdDetail.client';
import ProfileByIdHeader from './components/ProfileByIdHeader';
import { Keys, getProfileById } from '@/apis/profile';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface PageProps {
  params: {
    userId: string;
  };
}

export default function page({ params }: PageProps) {
  const userId = Number(params.userId);

  return (
    <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
      <HydrationProvider
        queryFn={() => getProfileById(userId)}
        queryKey={Keys.getProfileById(userId)}
      >
        <ProfileByIdHeader />
        <ProfileByIdDetail />
      </HydrationProvider>
    </QueryAsyncBoundary>
  );
}
