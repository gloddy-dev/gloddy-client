'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';

interface JoinHeaderProps {
  onPrevClick?: () => void;
}

export default function JoinHeader({ onPrevClick }: JoinHeaderProps) {
  return (
    <Header
      leftNode={
        <IconButton size="large">
          <Image
            alt="back"
            src="/icons/24/arrow_back.svg"
            width={24}
            height={24}
            onClick={onPrevClick}
          />
        </IconButton>
      }
      text="회원가입"
      className="px-4"
    />
  );
}
