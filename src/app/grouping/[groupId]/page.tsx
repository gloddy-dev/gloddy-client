import GroupingDetail from './components/GroupingDetail.client';
import GroupingTopNavigationBar from './components/GroupingTopNavigationBar.client';
import { Keys, getGroupDetail } from '@/apis/groups';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface GroupingDetailPageProps {
  params: {
    groupId: string;
  };
}

export default function GroupingDetailPage({ params }: GroupingDetailPageProps) {
  const groupId = Number(params.groupId);

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
