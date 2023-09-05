import ManageDetail from './components/ManageDetail.client';
import ManageHeader from './components/ManageHeader.client';
import { Keys, getApplies } from '@/apis/groups';
import { HydrationProvider } from '@/components/Provider';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
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
      <Suspense fallback={<Loading className="h-[calc(100dvh-48px)]" />}>
        <PageAnimation>
          <HydrationProvider
            queryFn={() => getApplies(groupId)}
            queryKey={Keys.getApplies(groupId)}
          >
            <ManageDetail />
          </HydrationProvider>
        </PageAnimation>
      </Suspense>
    </>
  );
}
