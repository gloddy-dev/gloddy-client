import FloatingBubbleSection from './components/FloatingBubbleSection.server';
import GroupingCardList from './components/GroupingCardList.client';
import { getGroups } from '@/apis/groups/apis';
import { Keys } from '@/apis/groups/keys';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { BottomNavigationBar } from '@/components/common/NavigationBar';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { Spacing } from '@/components/common/Spacing';
import { Header } from '@/components/Header';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function Grouping() {
  return (
    <>
      <Header leftNode={<p className="font-700 text-black2">그루핑</p>} />
      <Spacing size={18} />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={null}>
        <HydrationProvider queryKey={Keys.getGroups()} queryFn={() => getGroups(0)} isInfiniteQuery>
          <GroupingCardList />
        </HydrationProvider>
      </QueryAsyncBoundary>
      <FloatingBubbleSection />
      <BottomNavigationBar page="grouping" />
    </>
  );
}
