import ManageDetail from './components/ManageDetail';
import ManageHeader from './components/ManageHeader';

import { Keys, getApplies } from '@/apis/groups';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
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
      <LocalSuspenseErrorBoundary>
        <HydrationProvider queryFn={() => getApplies(groupId)} queryKey={Keys.getApplies(groupId)}>
          <ManageDetail />
        </HydrationProvider>
      </LocalSuspenseErrorBoundary>
    </>
  );
}
