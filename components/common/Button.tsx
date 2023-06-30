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
}

export default function Button(props: ButtonProps) {
  const { text, color = 'blue', onClick, href, disabled, ...rest } = props;
  const buttonColor = disabled ? 'gray5' : color === 'blue' ? 'blue' : 'orange';
  const textColor = disabled ? 'gray3' : 'white';

  console.log(disabled, color);
  return Boolean(href) ? (
    <div
      className={clsx(
        'w-full h-[3.75rem]  rounded-xl text-center flex justify-center items-center ',
        `text-${textColor}`,
        {
          'bg-gray5': disabled,
          'bg-blue': !disabled && color === 'blue',
          'bg-orange': !disabled && color === 'orange',
        }
      )}
    >
      <Link href={href || ''} className="text-white font-bold">
        {text}
      </Link>
    </div>
  ) : Boolean(onClick) ? (
    <button
      className={clsx(
        'w-full h-[3.75rem] rounded-xl text-center flex justify-center items-center font-bold',
        `bg-${buttonColor}`,
        `text-${textColor}`
      )}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  ) : (
    <div></div>
  );
}
