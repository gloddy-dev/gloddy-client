import ManageDetail from './components/ManageDetail.client';
import ManageHeader from './components/ManageHeader.client';
import { Keys, getApplies } from '@/apis/groups';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface GroupingManagePageProps {
  params: {
    groupId: string;
  };
}

export default function GroupingManagePage({ params }: GroupingManagePageProps) {
  const groupId = Number(params.groupId);

  return (
    <>
      <ManageHeader />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
        <PageAnimation>
          <HydrationProvider
            queryFn={() => getApplies(groupId)}
            queryKey={Keys.getApplies(groupId)}
          >
            <ManageDetail />
          </HydrationProvider>
        </PageAnimation>
      </QueryAsyncBoundary>
    </>
  );
}
