import { memo } from 'react';

import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';

interface TagProps<T> {
  id?: T;
  isSelected?: boolean;
  variant?: 'solid' | 'outline';
  size?: 'small' | 'medium';
  onSelected?: (id: T) => void;
  className?: string;
}

export default memo(function Tag<T>({
  id,
  isSelected,
  variant = 'outline',
  size = 'medium',
  children,
  onSelected,
  className,
}: StrictPropsWithChildren<TagProps<T>>) {
  return (
    <button
      // TODO: solid 디자인 추가 시 적용
      className={cn(
        'rounded-full',
        {
          'text-subtitle-2 px-16 py-8': size === 'medium',
          'text-subtitle-3 px-8 py-4': size === 'small',
          'border-border-default text-sign-tertiary border bg-white':
            variant === 'outline' && !isSelected,
          'border-primary-dark bg-brand-color text-primary-dark border':
            variant === 'outline' && isSelected,
          'bg-brand-color text-primary-dark': variant === 'solid' && isSelected,
        },
        className
      )}
      onClick={() => id && onSelected?.(id)}
      type="button"
    >
      {children}
    </button>
  );
}) as <T>(props: StrictPropsWithChildren<TagProps<T>>) => JSX.Element;
