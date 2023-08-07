import MemeberList from './components/MemberList.client';
import MembersTopNavigationBar from './components/MembersTopNavigationBar.client';
import { Spacing } from '@/components/common/Spacing';

export default function GroupingMembersPage() {
  return (
    <main>
      <MembersTopNavigationBar />
      <Spacing size={20} />
      <MemeberList />
    </main>
  );
}
