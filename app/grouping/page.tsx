import FloatingBubbleSection from './components/FloatingBubbleSection.server';
import GroupingCardList from './components/GroupingCardList.client';
import { getGroups } from '@/apis/groups/apis.server';
import { Keys } from '@/apis/groups/keys';
import { RetryErrorBoundary } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/HydrationProvider';
import { BottomNavigationBar, TopNavigationBar } from '@/components/common/NavigationBar';
import { Spacing } from '@/components/common/Spacing';
import { Suspense } from 'react';

const GroupingComponent = () => {
  const getGroupsQuery = async () => {
    const data = await getGroups(0);
    console.log(data);
    return data;
  };

  return (
    <HydrationProvider queryKey={Keys.getGroups()} queryFn={getGroupsQuery}>
      <RetryErrorBoundary>
        <Suspense>
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
