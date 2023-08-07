import cn from '@/utils/cn';
import Link from 'next/link';

import type { ButtonHTMLAttributes } from 'react';

export type ButtonColor = 'blue' | 'orange' | 'gray';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  color?: ButtonColor;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  className?: string;
  children?: React.ReactNode;
}

export default function Button({
  text,
  color = 'blue',
  onClick,
  href,
  disabled,
  type = 'button',
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <div
      className={cn(
        'flex h-60 w-full items-center justify-center rounded-xl text-center text-16',
        {
          'bg-gray5 text-gray3': disabled,
          'text-white': !disabled,

          'bg-blue': !disabled && color === 'blue',
          'bg-orange': !disabled && color === 'orange',
          'bg-gray3 text-white': !disabled && color === 'gray',
        },
        className
      )}
    >
      {!!href && (
        <Link href={href || ''} className="font-bold text-white">
          {text || children}
        </Link>
      )}
      {!!onClick && (
        <button
          type={type}
          onClick={onClick}
          className="h-full w-full"
          disabled={disabled}
          {...rest}
        >
          {text || children}
        </button>
      )}
      {!href && !onClick && (
        <button className="h-full w-full" type={type} disabled={disabled} {...rest}>
          {text || children}
        </button>
      )}
    </div>
  );
}
