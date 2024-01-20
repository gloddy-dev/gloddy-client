import MemeberList from './components/MemberList.client';
import MembersHeader from './components/MembersHeader.client';
import { Keys, getGroupMembers } from '@/apis/groups';
import { Loading } from '@/components/Loading';
import { HydrationProvider } from '@/components/Provider';
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
      <Suspense fallback={<Loading />}>
        <HydrationProvider
          queryFn={() => getGroupMembers(groupId)}
          queryKey={Keys.getGroupMembers(groupId)}
        >
          <MemeberList />
        </HydrationProvider>
      </Suspense>
    </>
  );
}
