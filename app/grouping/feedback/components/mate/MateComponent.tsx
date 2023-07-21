'use client';
import MateCardList from './MateCardList';
import { BottomFixedButton } from '@/components/common/Button';
import { TopNavigationBar } from '@/components/common/NavigationBar';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';
import { Control, useFormState } from 'react-hook-form';

import type { FeedbackRequestType } from '../../type';

const DUMMY_USERLIST = [
  {
    id: 1,
    name: 'KIM',
    imageUrl: '/assets/avatar.svg',
  },
  {
    id: 2,
    name: 'John Doe',
    imageUrl: '/assets/avatar.svg',
  },
  {
    id: 3,
    name: 'Robert',
    imageUrl: '/assets/avatar.svg',
  },
  {
    id: 4,
    name: 'willy',
    imageUrl: '/assets/avatar.svg',
  },
];

interface MateComponentProps {
  onPrevClick?: () => void;
  onNextClick?: () => void;
  nextButtonNode?: React.ReactNode;
  control?: Control<FeedbackRequestType>;
}

export default function MateComponent({ onPrevClick, onNextClick, control }: MateComponentProps) {
  const { isValid, isDirty } = useFormState({ control });

  return (
    <main>
      <TopNavigationBar
        text="최고의 짝꿍"
        leftNode={
          <Image
            src="/assets/arrow_back.svg"
            width={8}
            height={30}
            alt="back"
            onClick={onPrevClick}
            className="cursor-pointer"
          />
        }
      />
      <MateCardList userList={DUMMY_USERLIST} />
      <Spacing size={100} />
      <BottomFixedButton text="완료" onClick={onNextClick} disabled={!isValid || !isDirty} />
    </main>
  );
}
