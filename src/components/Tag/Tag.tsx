import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';
import { memo } from 'react';

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
          'px-16 py-8 text-subtitle-2': size === 'medium',
          'px-8 py-4 text-subtitle-3': size === 'small',
          'border border-border-default bg-white text-sign-tertiary':
            variant === 'outline' && !isSelected,
          'border border-primary-dark bg-brand-color text-primary-dark':
            variant === 'outline' && isSelected,
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
