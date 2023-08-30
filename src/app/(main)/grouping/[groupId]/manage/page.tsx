import ManageDetail from './components/ManageDetail.client';
import ManageHeader from './components/ManageHeader.client';
import { Keys, getApplies } from '@/apis/groups';
import { HydrationProvider } from '@/components/common/Provider';
import { Suspense } from 'react';

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
      <Suspense fallback={null}>
        <HydrationProvider queryFn={() => getApplies(groupId)} queryKey={Keys.getApplies(groupId)}>
          <ManageDetail />
        </HydrationProvider>
      </Suspense>
    </>
  );
}
