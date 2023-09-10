/* eslint-disable react-hooks/exhaustive-deps */
import { Loading } from '../Loading';
import cn from '@/utils/cn';
import { debounce, throttle } from 'lodash';
import { useCallback } from 'react';

import type { StrictPropsWithChildren } from '@/types';

interface ButtonProps<T extends React.ElementType> extends React.HTMLAttributes<T> {
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
  /**
   * 전체 너비를 설정합니다. (default: true)
   */
  fullWidth?: boolean;
  /**
   * 로딩 중임을 표시합니다. (default: false)
   */
  isLoading?: boolean;
  /**
   * 클릭 이벤트를 설정합니다.
   */
  actionType?: 'debounce' | 'throttle' | 'none';
  /**
   * 디바운스 딜레이를 설정합니다. (default: 200)
   */
  debounceDelay?: number;
  /**
   * 스로틀 딜레이를 설정합니다. (default: 300)
   */
  throttleDelay?: number;
  onClick?: (event?: any) => void;
}

export default function Button<T extends React.ElementType>({
  as,
  className,
  disabled,
  children,
  onClick,
  isLoading = false,
  size = 'medium',
  variant = 'solid-primary',
  fullWidth = true,
  actionType = 'none',
  debounceDelay = 200,
  throttleDelay = 300,
  ...props
}: StrictPropsWithChildren<ButtonProps<T> & React.ComponentPropsWithoutRef<T>>) {
  const Element = as || 'button';

  const handleDebounceClick = useCallback(
    debounce((event) => {
      onClick?.(event);
    }, debounceDelay),
    [onClick, debounceDelay]
  );

  const handleThrottleClick = useCallback(
    throttle((event) => {
      onClick?.(event);
    }, throttleDelay),
    [throttleDelay]
  );

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
          'w-full': fullWidth,
        },
        className
      )}
      onClick={
        actionType === 'debounce'
          ? handleDebounceClick
          : actionType === 'throttle'
          ? handleThrottleClick
          : onClick
      }
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Loading /> : children}
    </Element>
  );
}
