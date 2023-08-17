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
      <Header>
        <Header.Left>
          <div className="flex gap-16 px-20">
            <p>참여 모임</p>
            <p className="text-sign-sub">찜한 그룹</p>
          </div>
        </Header.Left>
      </Header>
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
