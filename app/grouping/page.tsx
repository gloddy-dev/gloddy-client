import FloatingBubbleSection from './components/FloatingBubbleSection.server';
import GroupingCardList from './components/GroupingCardList.client';
import GroupingTopNavigationBar from './components/GroupingTopNavigationBar.server';
import { Keys, getGroups } from '@/apis/groups';
import { RetryErrorBoundary } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/HydrationProvider';
import { BottomNavigationBar } from '@/components/common/NavigationBar';
import { Spacing } from '@/components/common/Spacing';
import { Suspense } from 'react';

const GroupingComponent = () => {
  const getGroupsQuery = async () => {
    const data = await getGroups(0);
    return data;
  };

  return (
    // <HydrationProvider queryKey={Keys.getGroups()} queryFn={getGroupsQuery}>
    <RetryErrorBoundary>
      <Suspense>
        <GroupingCardList />
      </Suspense>
    </RetryErrorBoundary>
    // </HydrationProvider>
  );
};

export default function Grouping() {
  return (
    <>
      <GroupingTopNavigationBar />

      <Spacing size={18} />

      <GroupingComponent />

      <FloatingBubbleSection />

      <BottomNavigationBar page="grouping" />
    </>
  );
}
