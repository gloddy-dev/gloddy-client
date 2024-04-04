import { ErrorBoundary } from 'react-error-boundary';

import MemeberList from './components/MemberList';
import MembersHeader from './components/MembersHeader';

import { Keys, getGroupMembers } from '@/apis/groups';
import { ErrorFallback } from '@/components/ErrorBoundary';
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
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <HydrationProvider
          queryFn={() => getGroupMembers(groupId)}
          queryKey={Keys.getGroupMembers(groupId)}
        >
          <MemeberList />
        </HydrationProvider>
      </ErrorBoundary>
    </>
  );
}
