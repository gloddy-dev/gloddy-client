import FloatingBubbleSection from './components/FloatingBubbleSection.server';
import GroupingCardList from './components/GroupingCardList.client';
import { getGroups } from '@/apis/groups/apis';
import { Keys } from '@/apis/groups/keys';
import { RetryErrorBoundary } from '@/components/common/ErrorBoundary';
import { BottomNavigationBar, TopNavigationBar } from '@/components/common/NavigationBar';
import { HydrationProvider } from '@/components/common/Provider/HydrationProvider';
import { Spacing } from '@/components/common/Spacing';
import { Suspense } from 'react';

const GroupingComponent = () => {
  return (
    <HydrationProvider queryKey={Keys.getGroups()} queryFn={() => getGroups(0)} isInfiniteQuery>
      <RetryErrorBoundary>
        <Suspense fallback={null}>
          <GroupingCardList />
        </Suspense>
      </RetryErrorBoundary>
    </HydrationProvider>
  );
};

export default function Grouping() {
  return (
    <main className="h-full bg-white2">
      <TopNavigationBar leftNode={<p className="font-700 text-black2">그루핑</p>} />
      <Spacing size={18} />
      <GroupingComponent />
      <FloatingBubbleSection />
      <BottomNavigationBar page="grouping" />
    </main>
  );
}
