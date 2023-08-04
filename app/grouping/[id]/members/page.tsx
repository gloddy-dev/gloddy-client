import MemeberList from './components/MemberList';
import MembersTopNavigationBar from './components/MembersTopNavigationBar';
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
