import FeedbackFunnel from './components/FeedbackFunnel.client';
import FeedbackProvider from './components/FeedbackProvider.client';
import { Keys, getEstimate } from '@/apis/groups';
import { HydrationProvider } from '@/components/Provider';
import { Suspense } from 'react';

interface PageProps {
  params: {
    groupId: string;
  };
}

export default function page({ params }: PageProps) {
  const groupId = Number(params.groupId);

  return (
    <Suspense>
      {/* <HydrationProvider queryKey={Keys.getEstimate(groupId)} queryFn={() => getEstimate(groupId)}> */}
      <FeedbackProvider>
        <FeedbackFunnel />
      </FeedbackProvider>
      {/* </HydrationProvider> */}
    </Suspense>
  );
}
