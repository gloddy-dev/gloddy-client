import GroupDetailPage from './components/GroupDetail.client';
import GroupDetailHeader from './components/GroupDetailHeader.client';
import { Keys, getGroupDetail, getGroupMembers, getNotices } from '@/apis/groups';
import LocalErrorSuspenseBoundary from '@/components/ErrorBoundary/LocalErrorSuspenseBoundary';
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
      <LocalErrorSuspenseBoundary>
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
      </LocalErrorSuspenseBoundary>
    </>
  );
}
