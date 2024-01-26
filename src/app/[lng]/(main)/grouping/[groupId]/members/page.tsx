import MemeberList from './components/MemberList.client';
import MembersHeader from './components/MembersHeader.client';
import { Keys, getGroupMembers } from '@/apis/groups';
import LocalApiAsyncBoundary from '@/components/ErrorBoundary/LocalApiAsyncBoundary';
import { HydrationProvider } from '@/components/Provider';

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
      <LocalApiAsyncBoundary>
        <HydrationProvider
          queryFn={() => getGroupMembers(groupId)}
          queryKey={Keys.getGroupMembers(groupId)}
        >
          <MemeberList />
        </HydrationProvider>
      </LocalApiAsyncBoundary>
    </>
  );
}
