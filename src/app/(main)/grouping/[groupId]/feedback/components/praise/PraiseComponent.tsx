'use client';
import PraiseCardList from './PraiseCardList';
import { BottomFixedButton } from '@/components/common/Button';
import { Spacing } from '@/components/common/Spacing';
import { Header } from '@/components/Header';
import Image from 'next/image';

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

interface PraiseComponentProps {
  onPrevClick?: () => void;
  onNextClick?: () => void;
}

export default function PraiseComponent({ onPrevClick, onNextClick }: PraiseComponentProps) {
  return (
    <main className="bg-white">
      <Header
        text="칭찬합시다"
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
      <PraiseCardList userList={DUMMY_USERLIST} />
      <Spacing size={100} />
      <BottomFixedButton text="다음" onClick={onNextClick} />
    </main>
  );
}