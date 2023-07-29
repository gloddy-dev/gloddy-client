import FloatingBubbleSection from './components/FloatingBubbleSection.server';
import GroupingCardList from './components/GroupingCardList.client';
import { getGroups } from '@/apis/groups';
import { RetryErrorBoundary } from '@/components/common/ErrorBoundary';
import { HydrationProvider } from '@/components/common/HydrationProvider';
import { BottomNavigationBar, TopNavigationBar } from '@/components/common/NavigationBar';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';
import Link from 'next/link';
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
      <TopNavigationBar
        leftNode={<p>그루핑</p>}
        rightNode={
          <Link href="/search">
            <Image src="/assets/search_navbar.svg" alt="search" width={15} height={15} />
          </Link>
        }
      />
      <Spacing size={18} />
      <GroupingComponent />
      <FloatingBubbleSection />
      <BottomNavigationBar page="grouping" />
    </>
  );
}
