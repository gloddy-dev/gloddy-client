'use client';
import { Header } from '@/components/Header';
import Image from 'next/image';

interface JoinHeaderProps {
  onPrevClick?: () => void;
}

export default function JoinHeader({ onPrevClick }: JoinHeaderProps) {
  return (
    <Header
      leftNode={
        <div className="flex items-center">
          <Image
            alt="back"
            src="/icons/24/arrow_back.svg"
            width={24}
            height={24}
            onClick={onPrevClick}
          />
          <p>회원가입</p>
        </div>
      }
    />
  );
}
