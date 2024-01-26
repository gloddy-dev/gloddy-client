import ManageDetail from './components/ManageDetail.client';
import ManageHeader from './components/ManageHeader.client';
import { Keys, getApplies } from '@/apis/groups';
import LocalApiAsyncBoundary from '@/components/ErrorBoundary/LocalApiAsyncBoundary';
import { HydrationProvider } from '@/components/Provider';

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
      <LocalApiAsyncBoundary>
        <HydrationProvider queryFn={() => getApplies(groupId)} queryKey={Keys.getApplies(groupId)}>
          <ManageDetail />
        </HydrationProvider>
      </LocalApiAsyncBoundary>
    </>
  );
}
