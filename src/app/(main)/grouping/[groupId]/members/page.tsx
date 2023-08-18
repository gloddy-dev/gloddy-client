import MemeberList from './components/MemberList.client';
import MembersHeader from './components/MembersHeader.client';
import { Spacing } from '@/components/common/Spacing';

export default function GroupingMembersPage() {
  return (
    <main>
      <MembersHeader />
      <Spacing size={20} />
      <MemeberList />
    </main>
  );
}
