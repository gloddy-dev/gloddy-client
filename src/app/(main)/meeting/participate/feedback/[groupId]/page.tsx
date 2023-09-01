import PraiseSection from './components/PraiseSection.client';
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
      <HydrationProvider queryKey={Keys.getEstimate(groupId)} queryFn={() => getEstimate(groupId)}>
        <PraiseSection />
      </HydrationProvider>
    </Suspense>
  );
}
