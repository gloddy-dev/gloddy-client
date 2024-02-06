'use client';
import clsx from 'clsx';
import { memo } from 'react';

import { useJoinContext } from '../../../components/JoinContext.client';

import type { PersonalityType } from '@/types';

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
    if (personalityIdList.length >= 3) return;
    setValue('personalityIdList', [...personalityIdList, id]);
  };

  return (
    <div
      className={clsx(
        'text-16 h-50 bg-blue flex w-4/12 flex-grow items-center justify-center rounded-full',
        {
          'bg-blue text-white': isSelected,
          'border-gray4 text-gray4 border bg-white': !isSelected,
        }
      )}
      onClick={onClick}
    >
      {keyword}
    </div>
  );
});
