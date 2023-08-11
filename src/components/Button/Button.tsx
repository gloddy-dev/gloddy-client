import cn from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼의 크기를 설정합니다. (default: medium)
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
  children: React.ReactNode;
}

export default function Button({
  size = 'medium',
  variant = 'solid-primary',
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
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
    </button>
  );
}
