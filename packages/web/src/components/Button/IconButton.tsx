import cn from '@/utils/cn';

import type { StrictPropsWithChildren } from '@/types';
import type { HTMLAttributes } from 'react';

interface IconButtonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 버튼의 크기를 설정합니다. small: 24px, medium: 40px, large: 48px (default: small)
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 버튼의 스타일을 설정합니다.
   */
  className?: string;
}
export default function IconButton({
  children,
  className,
  size = 'small',
  ...props
}: StrictPropsWithChildren<IconButtonProps>) {
  return (
    <div
      className={cn(
        'flex shrink-0 cursor-pointer items-center justify-center',
        {
          'h-24 w-24': size === 'small',
          'h-40 w-40': size === 'medium',
          'h-48 w-48': size === 'large',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
