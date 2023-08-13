import cn from '@/utils/cn';

import type { StrictPropsWithChildren } from '@/types';

export interface ButtonProps<T extends React.ElementType> extends React.HTMLAttributes<T> {
  as?: T;
  /**
   * 버튼의 크기를 설정합니다. small: 48px, medium: 56px (default: medium)
   */
  size?: 'small' | 'medium';
  /**
   * 버튼의 색상을 설정합니다. (default: solid-primary)
   */
  variant?:
    | 'solid-primary'
    | 'solid-default'
    | 'solid-secondary'
    | 'outline-warning'
    | 'solid-warning';
}

export default function Button<T extends React.ElementType>({
  as,
  size = 'medium',
  variant = 'solid-primary',
  className,
  disabled,
  children,
  ...props
}: StrictPropsWithChildren<ButtonProps<T> & React.ComponentPropsWithoutRef<T>>) {
  const Element = as ?? 'button';

  return (
    <Element
      className={cn(
        'flex items-center justify-center rounded-8 px-24 py-16 text-subtitle-2',
        {
          'h-56': size === 'medium',
          'h-48': size === 'small',
          'bg-primary text-sign-white disabled:bg-primary-light': variant === 'solid-primary',
          'bg-button text-sign-secondary disabled:bg-sub disabled:text-sign-caption':
            variant === 'solid-default',
          'bg-brand-color text-sign-brand disabled:text-sign-white': variant === 'solid-secondary',
          'border border-warning bg-warning-color text-warning disabled:border-warning-light disabled:bg-white disabled:text-warning-light':
            variant === 'outline-warning',
          'bg-warning text-sign-white disabled:bg-sub disabled:text-sign-caption':
            variant === 'solid-warning',
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </Element>
  );
}
