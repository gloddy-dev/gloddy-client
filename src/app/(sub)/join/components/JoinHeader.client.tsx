'use client';
import { IconButton } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Header } from '@/components/Header';
import cn from '@/utils/cn';
import Image from 'next/image';

interface JoinHeaderProps {
  onPrevClick?: () => void;
  isBack?: boolean;
}

export default function JoinHeader({ onPrevClick, isBack }: JoinHeaderProps) {
  return (
    <Header>
      <Header.Left>
        {isBack && (
          <>
            <Spacing direction="horizontal" size={4} />
            <IconButton size="large">
              <Image
                alt="back"
                src="/icons/24/arrow_back.svg"
                width={24}
                height={24}
                onClick={onPrevClick}
              />
            </IconButton>
          </>
        )}
        <p className={cn({ 'px-20': !isBack })}>회원가입</p>
      </Header.Left>
    </Header>
  );
}
