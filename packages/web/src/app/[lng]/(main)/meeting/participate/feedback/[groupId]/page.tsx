import FeedbackFunnel from './components/FeedbackFunnel';
import FeedbackProvider from './components/FeedbackProvider';

import { Keys, getEstimate } from '@/apis/groups';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

interface PageProps {
  params: {
    groupId: string;
  };
}

export default async function page({ params }: PageProps) {
  const groupId = Number(params.groupId);

  return (
    <LocalSuspenseErrorBoundary>
      <HydrationProvider queryKey={Keys.getEstimate(groupId)} queryFn={() => getEstimate(groupId)}>
        <FeedbackProvider>
          <FeedbackFunnel />
        </FeedbackProvider>
      </HydrationProvider>
    </LocalSuspenseErrorBoundary>
  );
}
