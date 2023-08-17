import { Spacing } from '../common/Spacing';
import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';
import { HtmlHTMLAttributes, PropsWithChildren } from 'react';

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
          'fixed inset-x-0 top-0 z-50 mx-auto flex h-48 max-w-450 items-center justify-between bg-white text-subtitle-1 text-sign-primary',
          className
        )}
        {...props}
      >
        <div className="flex items-center">
          {children}
          {leftNode ? leftNode : <div />}
          {text && <div>{text}</div>}
        </div>
        {rightNode ? rightNode : <div />}
      </header>
      {isSpacing && <Spacing size={48} />}
    </>
  );
}

function Left({ children }: StrictPropsWithChildren) {
  return <div>{children}</div>;
}

function Right({ children }: StrictPropsWithChildren) {
  return <div>{children}</div>;
}

Header.Left = Left;
Header.Right = Right;
