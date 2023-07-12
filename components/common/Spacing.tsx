import clsx from 'clsx';
import { HTMLAttributes, memo } from 'react';

interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  className?: string;
  size: number;
}

export default memo(function Spacing({
  size,
  direction = 'vertical',
  className,
  ...props
}: SpacingProps) {
  return (
    <div
      className={clsx('flex-none', direction === 'vertical' ? `h-${size}` : `w-${size}`, className)}
      {...props}
    />
  );
});
