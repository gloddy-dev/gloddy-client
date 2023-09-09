import ProfileByIdDetail from './components/ProfileByIdDetail.client';
import ProfileByIdHeader from './components/ProfileByIdHeader';
import { Keys, getProfileById } from '@/apis/profile';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
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
      <PageAnimation className="h-full bg-sub">
        <HydrationProvider
          queryFn={() => getProfileById(userId)}
          queryKey={Keys.getProfileById(userId)}
        >
          <ProfileByIdHeader />
          <ProfileByIdDetail />
        </HydrationProvider>
      </PageAnimation>
    </QueryAsyncBoundary>
  );
}
