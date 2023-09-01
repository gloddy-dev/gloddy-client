import CreateGroupButton from './components/CreateGroupButton.client';
import GroupingCardList from './components/GroupingCardList.client';
import GroupingHeader from './components/GroupingHeader';
import { getGroups } from '@/apis/groups/apis';
import { Keys } from '@/apis/groups/keys';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/Provider';
import { Footer } from '@/components/Footer';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function Grouping() {
  return (
    <>
      <GroupingHeader />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={null}>
        <HydrationProvider queryKey={Keys.getGroups()} queryFn={() => getGroups(0)} isInfiniteQuery>
          <GroupingCardList />
        </HydrationProvider>
      </QueryAsyncBoundary>
      <CreateGroupButton />
      <Footer page="grouping" />
    </>
  );
}
