'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { Spacing } from '@/components/Spacing';
import cn from '@/utils/cn';

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
              <Icon id="24-arrow_back" onClick={onPrevClick} />
            </IconButton>
          </>
        )}
        <p className={cn({ 'px-20': !isBack })}>회원가입</p>
      </Header.Left>
    </Header>
  );
}
