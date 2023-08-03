import clsx from 'clsx';
import { HTMLAttributes, memo } from 'react';

interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export default memo(function Spacing({
  direction = 'horizontal',
  className,
  ...props
}: SpacingProps) {
  return (
    <div
      className={clsx(
        'flex-none bg-gray9',
        className,
        direction === 'vertical' ? 'h-full w-1' : 'h-1 w-full'
      )}
      {...props}
    />
  );
});
