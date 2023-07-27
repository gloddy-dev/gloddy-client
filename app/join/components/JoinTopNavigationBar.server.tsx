'use client';
import { TopNavigationBar } from '@/components/common/NavigationBar';
import Image from 'next/image';

interface JoinTopNavigationBarProps {
  onPrevClick?: () => void;
}

export default function JoinTopNavigationBar({ onPrevClick }: JoinTopNavigationBarProps) {
  return (
    <TopNavigationBar
      text="회원가입"
      leftNode={
        <Image
          alt="back"
          src="/assets/arrow_back.svg"
          width={8}
          height={30}
          onClick={onPrevClick}
        />
      }
    />
  );
}
