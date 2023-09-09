import FeedbackFunnel from './components/FeedbackFunnel.client';
import FeedbackProvider from './components/FeedbackProvider.client';
import { Keys, getEstimate } from '@/apis/groups';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface PageProps {
  params: {
    groupId: string;
  };
}

export default function page({ params }: PageProps) {
  const groupId = Number(params.groupId);

  return (
    <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
      <PageAnimation>
        <HydrationProvider
          queryKey={Keys.getEstimate(groupId)}
          queryFn={() => getEstimate(groupId)}
        >
          <FeedbackProvider>
            <FeedbackFunnel />
          </FeedbackProvider>
        </HydrationProvider>
      </PageAnimation>
    </QueryAsyncBoundary>
  );
}
