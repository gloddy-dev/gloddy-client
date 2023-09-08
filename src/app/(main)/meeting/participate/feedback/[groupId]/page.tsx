import FeedbackFunnel from './components/FeedbackFunnel.client';
import FeedbackProvider from './components/FeedbackProvider.client';
import { Keys, getEstimate } from '@/apis/groups';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';
import { Loading } from 'antd-mobile';

interface PageProps {
  params: {
    groupId: string;
  };
}

export default function page({ params }: PageProps) {
  const groupId = Number(params.groupId);

  return (
    <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
      <HydrationProvider queryKey={Keys.getEstimate(groupId)} queryFn={() => getEstimate(groupId)}>
        <FeedbackProvider>
          <FeedbackFunnel />
        </FeedbackProvider>
      </HydrationProvider>
    </QueryAsyncBoundary>
  );
}
