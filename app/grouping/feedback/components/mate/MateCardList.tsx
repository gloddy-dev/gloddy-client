'use client';
import MateCard from './MateCard';
import { useFeedbackContext } from '../../FeedbackFormProvider';

import type { User } from '../../type';

interface MateCardListProps {
  userList: User[];
}

export default function MateCardList({ userList }: MateCardListProps) {
  const { watch, setValue } = useFeedbackContext();

  const handleClick = (user: User) => {
    if (watch('mateId') === user.id) {
      return;
    }

    setValue('mateId', user.id);
  };

  return (
    <div className="flex flex-col gap-12">
      {userList.map((user) => (
        <MateCard
          key={user.id}
          user={user}
          isSelected={watch('mateId') === user.id}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
