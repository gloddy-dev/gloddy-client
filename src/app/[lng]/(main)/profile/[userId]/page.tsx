import ProfileByIdDetail from './components/ProfileByIdDetail.client';
import ProfileByIdHeader from './components/ProfileByIdHeader';
import { Keys, getProfileById } from '@/apis/profile';
import LocalApiAsyncBoundary from '@/components/ErrorBoundary/LocalApiAsyncBoundary';
import { HydrationProvider } from '@/components/Provider';

interface PageProps {
  params: {
    userId: string;
  };
}

export default function page({ params }: PageProps) {
  const userId = Number(params.userId);

  return (
    <LocalApiAsyncBoundary>
      <HydrationProvider
        queryFn={() => getProfileById(userId)}
        queryKey={Keys.getProfileById(userId)}
      >
        <ProfileByIdHeader />
        <ProfileByIdDetail />
      </HydrationProvider>
    </LocalApiAsyncBoundary>
  );
}
