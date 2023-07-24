import { PersonalityType } from '../type';
import clsx from 'clsx';
import React from 'react';

interface PersonalityItemProps {
  personality: PersonalityType;
  isSelected: boolean;
  onClick: (id: number) => void;
}

export default React.memo(function PersonalityItem({
  personality,
  isSelected,
  onClick,
}: PersonalityItemProps) {
  return (
    <div
      className={clsx(
        'flex h-50 w-4/12 flex-grow items-center justify-center rounded-full bg-blue text-16',
        {
          'bg-blue text-white': isSelected,
          'border border-gray4 bg-white text-gray4': !isSelected,
        }
      )}
      onClick={() => onClick(personality.id)}
    >
      {personality.keyword}
    </div>
  );
});
