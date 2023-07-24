import PraiseCard from './PraiseCard';

import type { User } from '../../type';

interface PraiseCardListProps {
  userList: User[];
}

export default function PraiseCardList({ userList }: PraiseCardListProps) {
  return (
    <div className="flex flex-col gap-12">
      {userList.map((user) => (
        <PraiseCard key={user.id} user={user} />
      ))}
    </div>
  );
}
