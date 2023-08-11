import cn from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium';
  color?: 'solid-primary' | 'solid-default' | 'outline-warning' | 'solid-warning';
  children: React.ReactNode;
}

export default function Button({
  size = 'medium',
  color = 'solid-primary',
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
          'bg-primary text-sign-white disabled:bg-primary-light': color === 'solid-primary',
          'bg-button text-sign-secondary disabled:bg-sub disabled:text-sign-caption':
            color === 'solid-default',
          'border border-warning bg-warning-color text-warning disabled:border-warning-light disabled:bg-white disabled:text-warning-light':
            color === 'outline-warning',
          'bg-warning text-sign-white disabled:bg-sub disabled:text-sign-caption':
            color === 'solid-warning',
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
