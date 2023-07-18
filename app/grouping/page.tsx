import FloatingBubbleSection from './components/FloatingBubbleSection.server';
import GroupingCardList from './components/GroupingCardList.client';
import GroupingTopNavigationBar from './components/GroupingTopNavigationBar.server';
import { getGroupsServerServer } from '@/apis/groups';
import { BottomNavigationBar } from '@/components/common/NavigationBar';
import { Spacing } from '@/components/common/Spacing';

export default function Grouping() {
  const getGroupsQuery = async () => {
    const data = await getGroupsServer();
    return data;
  };

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
