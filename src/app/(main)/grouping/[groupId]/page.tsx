import GroupDetailPage from './components/GroupDetail.client';
import { Keys, getGroupDetail } from '@/apis/groups';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/Provider';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
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
    <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
      <PageAnimation>
        <HydrationProvider
          queryKey={Keys.getGroupDetail(groupId)}
          queryFn={() => getGroupDetail(groupId)}
        >
          <GroupDetailPage groupId={groupId} />
        </HydrationProvider>
      </PageAnimation>
    </QueryAsyncBoundary>
  );
}
