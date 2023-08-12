'use client';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import cn from '@/utils/cn';
import clsx from 'clsx';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface TextFieldProps {
  register: any;
  placeholder?: string;
  label?: string;
  caption?: string;
  inputLeftIcon?: React.ReactNode;
  maxCount?: boolean;
  timer?: number;
  form: UseFormReturn;
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
  maxCount,
  timer,
  form,
  ...props
}: TextFieldProps) {
  const [isFocus, setIsFocus] = useState(false);
  const textFieldRef = useRef<HTMLDivElement>(null);
  const inputName = register.name;

  useOnClickOutside(textFieldRef, () => {
    setIsFocus(false);
  });

  const isSuccess = form.formState.isValid;
  const errorMessage = form.formState.errors[inputName]?.message;
  const isDirty = form.getFieldState(inputName).isDirty;
  const inputRightIcon = errorMessage ? 'warning' : isDirty ? 'backspace' : '';
  console.log(errorMessage);

  return (
    <section ref={textFieldRef}>
      <section
        className={cn(
          'w-full rounded-8 border-1 p-16',
          isFocus && 'border-border-pressed bg-white',
          !isFocus && 'border-transparent bg-sub',
          isSuccess && 'border-success-cto bg-brand-color',
          errorMessage && 'border-warning bg-warning-color'
        )}
      >
        {label && <label className="mb-2 text-caption text-sign-tertiary">{label}</label>}
        <div className="relative flex h-24 w-full items-center justify-around">
          {inputLeftIcon}
          <input
            className={clsx(
              'h-full w-full text-paragraph-1 outline-none placeholder:text-paragraph-1',
              isFocus && 'bg-white',
              !isFocus && 'bg-sub',
              isSuccess && 'bg-brand-color',
              errorMessage && 'bg-warning-color'
            )}
            onFocus={(e) => {
              setIsFocus(true);
            }}
            placeholder={placeholder}
            {...register}
            {...props}
          />
          {inputRightIcon && (
            <Image
              src={`/icons/24/${inputRightIcon}.svg`}
              width={24}
              height={24}
              alt={inputRightIcon}
              onClick={() => form.setValue(inputName, '')}
            />
          )}
        </div>
      </section>
      <section className={clsx('flex justify-between px-8 pt-4 text-caption')}>
        <span className={clsx(isSuccess && 'text-success-text', errorMessage && 'text-warning')}>
          {caption ?? errorMessage}
        </span>
        {maxCount && (
          <span>
            <span className={errorMessage && 'text-warning'}>{form.watch(inputName).length}</span>/
            {maxCount}
          </span>
        )}
        {timer && <span>{formatTimer(timer)}</span>}
      </section>
    </section>
  );
}
