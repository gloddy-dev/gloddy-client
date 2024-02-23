import { Flex } from '../Layout';
import { Spacing } from '../Spacing';

import type { HtmlHTMLAttributes, PropsWithChildren } from 'react';

import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';

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
          'max-w-450 text-subtitle-1 text-sign-primary fixed inset-x-0 top-0 z-50 mx-auto flex h-48 items-center justify-between bg-white',
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
    <Flex align="center" className={cn('text-subtitle-1 mr-auto overflow-hidden', className)}>
      {children}
    </Flex>
  );
}

function Right({ children, className }: StrictPropsWithChildren<SideProps>) {
  return (
    <Flex align="center" className={cn('text-subtitle-1 ml-auto justify-self-end', className)}>
      {children}
    </Flex>
  );
}

Header.Left = Left;
Header.Right = Right;
