'use client';
import MateCardList from './MateCardList';
import { useFeedbackContext } from '../../FeedbackContext';
import { BottomFixedButton } from '@/components/common/Button';
import { Header } from '@/components/Header';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';

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
  onNextClick?: (data: FeedbackRequestType) => void;
  nextButtonNode?: React.ReactNode;
}

export default function MateComponent({ onPrevClick, onNextClick }: MateComponentProps) {
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = useFeedbackContext();

  return (
    <main className="bg-white">
      <Header
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
      <BottomFixedButton
        text="완료"
        onClick={handleSubmit(onNextClick!)}
        disabled={!isDirty || !isValid}
      />
    </main>
  );
}
