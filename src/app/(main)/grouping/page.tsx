import CreateGroupButton from './components/CreateGroupButton.client';
import GroupingCardList from './components/GroupingCardList.client';
import GroupingHeader from './components/GroupingHeader';
import { getGroups } from '@/apis/groups/apis';
import { Keys } from '@/apis/groups/keys';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/Provider';
import { Spacing } from '@/components/common/Spacing';
import { Footer } from '@/components/Footer';
import { Loading } from '@/components/Loading';
import { PageAnimation } from '@/components/PageAnimation';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function Grouping() {
  return (
    <>
      <GroupingHeader />
      <QueryAsyncBoundary
        rejectedFallback={RejectedFallback}
        pendingFallback={<Loading className="h-300" />}
      >
        <PageAnimation>
          <HydrationProvider
            queryKey={Keys.getGroups()}
            queryFn={() => getGroups(0)}
            isInfiniteQuery
          >
            <GroupingCardList />
          </HydrationProvider>
        </PageAnimation>
      </QueryAsyncBoundary>
      <CreateGroupButton />
      <Spacing size={60} />
      <Footer page="grouping" />
    </>
  );
}
