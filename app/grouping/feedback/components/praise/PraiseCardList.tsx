import PraiseCard from './PraiseCard';

import type { User } from '../../type';

interface PraiseCardListProps {
  userList: User[];
}

export default function PraiseCardList({ userList }: PraiseCardListProps) {
  return (
    <div className="flex flex-col gap-12">
      {userList.map(({ id, name, imageUrl }) => (
        <PraiseCard key={id} name={name} imageUrl={imageUrl} />
      ))}
    </div>
  );
}
