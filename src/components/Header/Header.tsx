import { Flex } from '../Layout';
import { Spacing } from '../Spacing';
import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';

import type { HtmlHTMLAttributes, PropsWithChildren } from 'react';

interface HeaderProps extends HtmlHTMLAttributes<HTMLHeadElement> {
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
  isSpacing?: boolean;
  text?: string;
  className?: string;
}

export default function Header({
  leftNode,
  rightNode,
  isSpacing = true,
  text,
  className,
  children,
  ...props
}: PropsWithChildren<HeaderProps>) {
  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 mx-auto flex h-48 max-w-450 touch-pan-x items-center justify-between bg-white text-subtitle-1 text-sign-primary',
          className
        )}
        {...props}
      >
        {children}
      </header>
      {isSpacing && <Spacing size={48} />}
    </>
  );
}

interface SideProps {
  className?: string;
}

function Left({ children, className }: StrictPropsWithChildren<SideProps>) {
  return (
    <Flex align="center" className={cn('mr-auto text-subtitle-1', className)}>
      {children}
    </Flex>
  );
}

function Right({ children, className }: StrictPropsWithChildren<SideProps>) {
  return (
    <Flex align="center" className={cn('ml-auto justify-self-end text-subtitle-1', className)}>
      {children}
    </Flex>
  );
}

Header.Left = Left;
Header.Right = Right;
