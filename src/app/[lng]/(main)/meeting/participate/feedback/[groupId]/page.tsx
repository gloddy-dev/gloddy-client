import FeedbackFunnel from './components/FeedbackFunnel.client';
import FeedbackProvider from './components/FeedbackProvider.client';
import { Keys, getEstimate } from '@/apis/groups';
import LocalApiAsyncBoundary from '@/components/ErrorBoundary/LocalApiAsyncBoundary';
import { HydrationProvider } from '@/components/Provider';

interface PageProps {
  params: {
    groupId: string;
  };
}

export default function page({ params }: PageProps) {
  const groupId = Number(params.groupId);

  return (
    <LocalApiAsyncBoundary>
      <HydrationProvider queryKey={Keys.getEstimate(groupId)} queryFn={() => getEstimate(groupId)}>
        <FeedbackProvider>
          <FeedbackFunnel />
        </FeedbackProvider>
      </HydrationProvider>
    </LocalApiAsyncBoundary>
  );
}
