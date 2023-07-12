import clsx from 'clsx';
import { HTMLAttributes, memo } from 'react';

interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  size: number;
}

export default memo(function Spacing({ direction = 'vertical', size, ...props }: SpacingProps) {
  return (
    <div
      className="flex-none"
      style={{
        [direction === 'vertical' ? 'height' : 'width']: size + 'px',
      }}
      {...props}
    />
  );
});
