import { clsx } from 'clsx';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

type ButtonColor = 'blue' | 'orange';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: ButtonColor;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export default function Button(props: ButtonProps) {
  const { text, color = 'blue', onClick, href, disabled, type = 'button', ...rest } = props;

  return (
    <div
      className={clsx(
        'w-full h-[3.75rem]  rounded-xl text-center flex justify-center items-center ',
        {
          'text-gray3': disabled,
          'text-white': !disabled,
        },
        {
          'bg-gray5': disabled,
          'bg-blue': !disabled && color === 'blue',
          'bg-orange': !disabled && color === 'orange',
        }
      )}
    >
      {Boolean(href) ? (
        <Link href={href || ''} className="text-white font-bold">
          {text}
        </Link>
      ) : Boolean(onClick) ? (
        <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          {...rest}
          className="w-full h-full"
        >
          {text}
        </button>
      ) : (
        <button {...rest} className="w-full h-full">
          {text}
        </button>
      )}
    </div>
  );
}
