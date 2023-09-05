import GroupDetailPage from './components/GroupDetail.client';
import GroupDetailHeader from './components/GroupDetailHeader.client';
import { Keys, getGroupDetail, getGroupMembers } from '@/apis/groups';
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
    <>
      <GroupDetailHeader />
      <QueryAsyncBoundary
        rejectedFallback={RejectedFallback}
        pendingFallback={<Loading className="h-[calc(100dvh-48px)]" />}
      >
        <PageAnimation>
          <HydrationProvider
            queryMultipleFn={[() => getGroupDetail(groupId), () => getGroupMembers(groupId)]}
            queryMultipleKey={[Keys.getGroupDetail(groupId), Keys.getGroupMembers(groupId)]}
          >
            <GroupDetailPage groupId={groupId} />
          </HydrationProvider>
        </PageAnimation>
      </QueryAsyncBoundary>
    </>
  );
}
