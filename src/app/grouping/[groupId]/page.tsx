import GroupingDetail from './components/GroupingDetail.client';
import GroupingHeader from './components/GroupingHeader.client';
import { Keys, getGroupDetail } from '@/apis/groups';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';
import { redirect } from 'next/navigation';

interface GroupingDetailPageProps {
  params: {
    groupId: string;
  };
  searchParams: {
    tab?: string;
  };
}

export default function GroupingDetailPage({ params, searchParams }: GroupingDetailPageProps) {
  const groupId = Number(params.groupId);
  if (!searchParams?.tab) redirect(`/grouping/${groupId}?tab=detail`);

  return (
    <>
      <GroupingHeader />
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
