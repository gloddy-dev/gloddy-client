import clsx from 'clsx';
import { HTMLAttributes, memo } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
}

export const Spacing = memo(function Spacing({ direction = 'vertical', size, ...props }: Props) {
  return (
    <div
      className={clsx('flex-none', direction === 'vertical' ? `h-${size}` : `w-${size}`)}
      {...props}
    />
  );
});
