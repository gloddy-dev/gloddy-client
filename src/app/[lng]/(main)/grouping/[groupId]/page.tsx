import GroupDetailPage from './components/GroupDetail.client';
import GroupDetailHeader from './components/GroupDetailHeader.client';
import { Keys, getGroupDetail, getGroupMembers, getNotices } from '@/apis/groups';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
import { Suspense } from 'react';

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
      <Suspense fallback={<Loading className="h-[calc(100dvh-48px)]" />}>
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
      </Suspense>
    </>
  );
}
