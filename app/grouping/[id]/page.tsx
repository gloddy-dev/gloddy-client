import GroupingDetail from './components/GroupingDetail.client';
import { Keys, getGroup } from '@/apis/groups';
import { RetryErrorBoundary } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { Suspense } from 'react';

export default function GroupingByIdPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const groupId = Number(id);

  return (
    <RetryErrorBoundary>
      <Suspense fallback={null}>
        <HydrationProvider queryKey={Keys.getGroup(groupId)} queryFn={() => getGroup(groupId)}>
          <GroupingDetail groupId={groupId} />
        </HydrationProvider>
      </Suspense>
    </RetryErrorBoundary>
  );
}
