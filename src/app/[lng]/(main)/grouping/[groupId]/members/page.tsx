import MemeberList from './components/MemberList.client';
import MembersHeader from './components/MembersHeader.client';
import { Keys, getGroupMembers } from '@/apis/groups';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';

import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

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
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
        <HydrationProvider
          queryFn={() => getGroupMembers(groupId)}
          queryKey={Keys.getGroupMembers(groupId)}
        >
          <MemeberList />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </>
  );
}
