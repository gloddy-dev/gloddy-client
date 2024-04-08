import { ErrorBoundary } from 'react-error-boundary';

import ProfileByIdDetail from './components/ProfileByIdDetail';
import ProfileByIdHeader from './components/ProfileByIdHeader';

import { Keys, getProfileById } from '@/apis/profile';
import { ErrorFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

interface PageProps {
  params: {
    userId: string;
  };
}

export default async function page({ params }: PageProps) {
  const userId = Number(params.userId);

  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <HydrationProvider
        queryFn={() => getProfileById(userId)}
        queryKey={Keys.getProfileById(userId)}
      >
        <ProfileByIdHeader />
        <ProfileByIdDetail />
      </HydrationProvider>
    </ErrorBoundary>
  );
}
