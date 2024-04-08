import { ErrorBoundary } from 'react-error-boundary';

import ManageDetail from './components/ManageDetail';
import ManageHeader from './components/ManageHeader';

import { Keys, getApplies } from '@/apis/groups';
import { ErrorFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

interface GroupingManagePageProps {
  params: {
    groupId: string;
  };
}

export default async function GroupingManagePage({ params }: GroupingManagePageProps) {
  const groupId = Number(params.groupId);

  return (
    <>
      <ManageHeader />
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <HydrationProvider queryFn={() => getApplies(groupId)} queryKey={Keys.getApplies(groupId)}>
          <ManageDetail />
        </HydrationProvider>
      </ErrorBoundary>
    </>
  );
}
