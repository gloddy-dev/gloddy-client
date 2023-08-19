import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';
import { memo } from 'react';

interface TagProps<T> {
  id: T;
  isSelected: boolean;
  variant?: 'solid' | 'outline';
  onSelected?: (id: T) => void;
}

export default memo(function Tag<T>({
  id,
  isSelected,
  children,
  onSelected,
  variant = 'outline',
}: StrictPropsWithChildren<TagProps<T>>) {
  return (
    <button
      // TODO: solid 디자인 추가 시 적용
      className={cn('h-40 rounded-full px-16 py-8 text-subtitle-2', {
        'border border-border-default bg-white text-sign-tertiary':
          variant === 'outline' && !isSelected,
        'border border-primary-dark bg-brand-color text-primary-dark':
          variant === 'outline' && isSelected,
      })}
      onClick={() => onSelected?.(id)}
      type="button"
    >
      {children}
    </button>
  );
}) as <T>(props: StrictPropsWithChildren<TagProps<T>>) => JSX.Element;
