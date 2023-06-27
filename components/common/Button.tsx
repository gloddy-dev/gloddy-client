import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: 'blue' | 'orange';
}

export default function Button(props: ButtonProps) {
  const { text, color = 'blue', ...rest } = props;
  return (
    <button
      className={clsx(
        'w-full h-[3.75rem] rounded-xl text-center flex justify-center items-center text-white font-bold',
        `${color === 'blue' ? 'bg-blue' : 'bg-orange'}`
      )}
      {...rest}
    >
      {text}
    </button>
  );
}
