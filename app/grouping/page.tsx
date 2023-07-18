'use client';

import FloatingBubbleSection from './components/FloatingBubbleSection.server';
import GroupingCardList from './components/GroupingCardList.client';
import GroupingTopNavigationBar from './components/GroupingTopNavigationBar.server';
import { BottomNavigationBar } from '@/components/common/NavigationBar';
import PageTransition from '@/components/common/PageTransition';
import { Spacing } from '@/components/common/Spacing';

type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

export default function Grouping(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <PageTransition ref={ref}>
      <div className="relative h-full">
        <GroupingTopNavigationBar />

        <Spacing size={18} />

        <GroupingCardList />

        <FloatingBubbleSection />
      </div>
      <BottomNavigationBar page="grouping" />
    </PageTransition>
  );
}
