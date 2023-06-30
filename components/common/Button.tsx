import { clsx } from 'clsx';
import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

type ButtonColor = 'blue' | 'orange';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: ButtonColor;
  onClick?: () => void;
  href?: string;
}

export default function Button(props: ButtonProps) {
  const { text, color = 'blue', onClick, href, ...rest } = props;

  return Boolean(href) ? (
    <div
      className={clsx(
        'w-full h-[3.75rem] rounded-xl text-center flex justify-center items-center ',
        `${color === 'blue' ? 'bg-blue' : 'bg-orange'}`
      )}
    >
      <Link href={href || ''} className="text-white font-bold">
        {text}
      </Link>
    </div>
  ) : Boolean(onClick) ? (
    <button
      className={clsx(
        'w-full h-[3.75rem] rounded-xl text-center flex justify-center items-center text-white font-bold',
        `${color === 'blue' ? 'bg-blue' : 'bg-orange'}`
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
