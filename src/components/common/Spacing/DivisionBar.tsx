import cn from '@/utils/cn';
import clsx from 'clsx';
import { type HTMLAttributes, memo } from 'react';

interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  className?: string;
  size?: number;
}

export default memo(function Spacing({
  direction = 'horizontal',
  className,
  ...props
}: SpacingProps) {
  return (
    <div
      className={cn(
        'flex-none bg-divider',
        { 'h-full w-1': direction === 'vertical', 'h-1 w-full': direction === 'horizontal' },
        className
      )}
      {...props}
    />
  );
});
