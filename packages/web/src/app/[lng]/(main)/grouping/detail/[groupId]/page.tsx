import { ErrorBoundary } from 'react-error-boundary';

import GroupDetailPage from './components/GroupDetail';
import GroupDetailHeader from './components/GroupDetailHeader';

import { Keys, getGroupDetail, getGroupMembers, getNotices } from '@/apis/groups';
import { ErrorFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

interface GroupingDetailPageProps {
  params: {
    groupId: string;
  };
}

export default function GroupingDetailPage({ params }: GroupingDetailPageProps) {
  const groupId = Number(params.groupId);

  return (
    <>
      <GroupDetailHeader />
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <HydrationProvider
          queryMultipleFn={[
            () => getGroupDetail(groupId),
            () => getGroupMembers(groupId),
            () => getNotices(groupId),
          ]}
          queryMultipleKey={[
            Keys.getGroupDetail(groupId),
            Keys.getGroupMembers(groupId),
            Keys.getNotices(groupId),
          ]}
        >
          <GroupDetailPage />
        </HydrationProvider>
      </ErrorBoundary>
    </>
  );
}
