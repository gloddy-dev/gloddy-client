import GroupingDetail from './components/GroupingDetail.client';
import GroupingTopNavigationBar from './components/GroupingTopNavigationBar.client';
import { Keys, getGroupDetail } from '@/apis/groups';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function GroupingDetailPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const groupId = Number(id);

  return (
    <>
      <GroupingTopNavigationBar />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={null}>
        <HydrationProvider
          queryKey={Keys.getGroupDetail(groupId)}
          queryFn={() => getGroupDetail(groupId)}
        >
          <GroupingDetail groupId={groupId} />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </>
  );
}
