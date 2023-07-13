'use client';

import { BottomNavigationBar } from '@/components/common/NavigationBar';
import { Spacing } from '@/components/common/Spacing';

import FloatingBubbleSection from './components/FloatingBubbleSection.server';
import GroupingCardList from './components/GroupingCardList.client';
import GroupingTopNavigationBar from './components/GroupingTopNavigationBar.server';

export default function Grouping() {
  return (
    <div className="relative h-full">
      <GroupingTopNavigationBar />

      <Spacing size={18} />

      <GroupingCardList />

      <FloatingBubbleSection />

      <BottomNavigationBar page="grouping" />
    </div>
  );
}
