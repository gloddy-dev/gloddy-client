import FeedbackSection from './components/FeedbackSection.client';
import { Keys, getEstimate } from '@/apis/groups';
import { HydrationProvider } from '@/components/common/Provider';
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
      <FeedbackSection />
      {/* </HydrationProvider> */}
    </Suspense>
  );
}
