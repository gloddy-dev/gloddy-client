'use client';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import clsx from 'clsx';
import Image from 'next/image';
import { type InputHTMLAttributes, useRef, useState } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  placeholder?: string;
  label?: string;
  caption?: string;
  inputLeftIcon?: React.ReactNode;
  isSuccess?: boolean;
  errorMessage?: string;
  count?: number;
  maxCount?: boolean;
  timer?: number;
}

const formatTimer = (timer: number) => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export default function TextField({
  register,
  placeholder,
  label,
  caption,
  inputLeftIcon,
  isSuccess,
  errorMessage,
  count,
  maxCount,
  timer,
  ...props
}: TextFieldProps) {
  const [isFocus, setIsFocus] = useState(false);
  const textFieldRef = useRef<HTMLDivElement>(null);
  const onClose = () => {
    setIsFocus(false);
  };
  useOnClickOutside(textFieldRef, onClose);
  const inputRightIcon = isSuccess
    ? 'check'
    : errorMessage
    ? 'warning'
    : isFocus
    ? 'backspace'
    : '';

  return (
    <section ref={textFieldRef}>
      <section
        className={clsx(
          'rounded-8 p-16',
          isFocus && 'border-1 border-border-pressed bg-white',
          !isFocus && 'bg-sub',
          isSuccess && 'border-1 border-success-cto bg-brand-color',
          errorMessage && 'border-1 border-warning'
        )}
      >
        <label className="mb-2 text-caption text-sign-tertiary">{label}</label>
        <div className="relative flex h-full w-full items-center justify-around">
          {inputLeftIcon}
          <input
            className={clsx(
              'h-full w-full text-paragraph-1 outline-none placeholder:text-paragraph-1',
              isFocus && 'bg-white',
              !isFocus && 'bg-sub ',
              isSuccess && 'bg-brand-color'
            )}
            onFocus={(e) => {
              setIsFocus(true);
            }}
            placeholder={placeholder}
            {...register}
            {...props}
          />
          {inputRightIcon && (
            <Image src={`/icons/24/${inputRightIcon}.svg`} width={24} height={24} alt="backspace" />
          )}
        </div>
      </section>
      <section className={clsx('flex justify-between px-8 pt-4 text-caption')}>
        <span className={clsx(isSuccess && 'text-success-text', errorMessage && 'text-warning')}>
          {caption ?? errorMessage}
        </span>
        {count && maxCount && (
          <span>
            <span className={errorMessage && 'text-warning'}>{count}</span>/{maxCount}
          </span>
        )}
        {timer && <span>{formatTimer(timer)}</span>}
      </section>
    </section>
  );
}
