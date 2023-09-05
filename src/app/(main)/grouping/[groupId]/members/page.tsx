import MemeberList from './components/MemberList.client';
import MembersHeader from './components/MembersHeader.client';
import { Keys, getGroupMembers } from '@/apis/groups';
import { HydrationProvider } from '@/components/Provider';
import { PageAnimation } from '@/components/PageAnimation';
import { Suspense } from 'react';

interface GroupingMembersPageProps {
  params: {
    groupId: string;
  };
}

export default function GroupingMembersPage({ params }: GroupingMembersPageProps) {
  const groupId = Number(params.groupId);

  return (
    <>
      <MembersHeader />
      <PageAnimation>
        <Suspense fallback={null}>
          <HydrationProvider
            queryFn={() => getGroupMembers(groupId)}
            queryKey={Keys.getGroupMembers(groupId)}
          >
            <MemeberList />
          </HydrationProvider>
        </Suspense>
      </PageAnimation>
    </>
  );
}
