import MemeberList from './components/MemberList.client';
import MembersHeader from './components/MembersHeader.client';
import { Keys, getGroupMembers } from '@/apis/groups';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';
import { Loading } from 'antd-mobile';

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
        <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
          <HydrationProvider
            queryFn={() => getGroupMembers(groupId)}
            queryKey={Keys.getGroupMembers(groupId)}
          >
            <MemeberList />
          </HydrationProvider>
        </QueryAsyncBoundary>
      </PageAnimation>
    </>
  );
}
