'use client';
import { useFeedbackContext } from '../../FeedbackFormProvider';
import { TextArea } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import cn from '@/utils/cn';
import Image from 'next/image';

import type { User } from '../../type';

interface MateCardProps {
  user: User;
  isSelected: boolean;
  onClick?: (user: User) => void;
}

function MateCard({ user, isSelected, onClick }: MateCardProps) {
  const { register } = useFeedbackContext();

  return (
    <div
      className={cn('rounded-8 bg-gray6 p-16', isSelected && 'bg-blue text-white')}
      onClick={() => onClick?.(user)}
    >
      <div className="flex items-center">
        <div className="relative h-38 w-38">
          <Image src={user.imageUrl} alt="member" className="rounded-full object-cover" fill />
        </div>
        <Spacing size={12} direction="horizontal" />
        <p className={cn('text-16 font-700')}>{user.name}</p>
      </div>
      {isSelected && (
        <>
          <Spacing size={16} />
          <TextArea
            placeholder="선정 이유는 무엇인가요?"
            className="h-130"
            {...register('comment', { required: true })}
          />
        </>
      )}
    </div>
  );
}

export default MateCard;
