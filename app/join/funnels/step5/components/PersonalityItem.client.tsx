'use client';
import { useJoinContext } from '@/app/join/components/JoinContext';
import clsx from 'clsx';
import { memo } from 'react';

import type { PersonalityType } from '@/types/profile';

interface PersonalityItemProps {
  personality: PersonalityType;
}

export default memo(function PersonalityItem({
  personality: { id, keyword },
}: PersonalityItemProps) {
  const { watch, setValue } = useJoinContext();
  const personalityIdList = watch('personalityIdList');
  const isSelected = personalityIdList.includes(id);

  const onClick = () => {
    if (personalityIdList.includes(id)) {
      setValue(
        'personalityIdList',
        personalityIdList.filter((personalityId: number) => personalityId !== id)
      );
      return;
    }
    setValue('personalityIdList', [...personalityIdList, id]);
  };

  return (
    <div
      className={clsx(
        'flex h-50 w-4/12 flex-grow items-center justify-center rounded-full bg-blue text-16',
        {
          'bg-blue text-white': isSelected,
          'border border-gray4 bg-white text-gray4': !isSelected,
        }
      )}
      onClick={onClick}
    >
      {keyword}
    </div>
  );
});
