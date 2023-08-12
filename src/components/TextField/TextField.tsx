'use client';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import cn from '@/utils/cn';
import clsx from 'clsx';
import Image from 'next/image';
import { useRef, useState } from 'react';

import type { UseFormReturn } from 'react-hook-form';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hookForm: UseFormReturn<any>;
  register: any;
  label?: string;
  leftCaptionText?: string;
  inputLeftIcon?: React.ReactNode;
  maxCount?: number;
  timer?: number;
}

const formatTimer = (timer: number) => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export default function TextField({
  hookForm,
  register,
  label,
  leftCaptionText,
  inputLeftIcon,
  maxCount,
  timer,
  ...props
}: TextFieldProps) {
  const [isFocus, setIsFocus] = useState(false);
  const textFieldRef = useRef<HTMLDivElement>(null);
  const inputName = register.name;

  useOnClickOutside(textFieldRef, () => {
    setIsFocus(false);
  });

  const { formState, getFieldState, watch, setValue } = hookForm;

  const isSuccess = formState.isValid;
  const errorMessage = formState.errors[inputName]?.message;
  const isDirty = getFieldState(inputName).isDirty;
  const inputRightIcon = errorMessage ? 'warning' : isDirty ? 'backspace' : '';

  let rightCaptionText;
  if (maxCount) {
    rightCaptionText = `${watch(inputName).length}/${maxCount}`;
  } else if (timer) {
    rightCaptionText = formatTimer(timer);
  }

  return (
    <section ref={textFieldRef}>
      <section
        className={cn('w-full rounded-8 border-1 p-16', {
          'border-border-pressed bg-white': isFocus,
          'border-transparent bg-sub': !isFocus,
          'border-success-cto bg-brand-color': isSuccess,
          'border-warning bg-warning-color': !!errorMessage,
        })}
      >
        {label && <label className="mb-2 text-caption text-sign-tertiary">{label}</label>}
        <div className="relative flex h-24 w-full items-center justify-around">
          {inputLeftIcon}
          <input
            className={cn(
              'h-full w-full text-paragraph-1 outline-none placeholder:text-paragraph-1',
              {
                'bg-white': isFocus,
                'bg-sub': !isFocus,
                'bg-brand-color': isSuccess,
                'bg-warning-color': !!errorMessage,
              }
            )}
            onFocus={() => {
              setIsFocus(true);
            }}
            {...register}
            {...props}
          />
          {inputRightIcon && (
            <Image
              src={`/icons/24/${inputRightIcon}.svg`}
              width={24}
              height={24}
              alt={inputRightIcon}
              onClick={() => setValue(inputName, '')}
            />
          )}
        </div>
      </section>
      <section className={cn('flex justify-between px-8 pt-4 text-caption')}>
        <LeftCaption text={leftCaptionText} isError={!!errorMessage} />
        <RightCaption text={rightCaptionText} />
      </section>
    </section>
  );
}

interface LeftCaptionProps {
  text?: string;
  isError?: boolean;
}

function LeftCaption({ text, isError }: LeftCaptionProps) {
  return <span className={clsx(isError && 'text-warning')}>{text}</span>;
}
interface RightCaptionProps {
  text?: string;
}
function RightCaption({ text }: RightCaptionProps) {
  return <span>{text}</span>;
}
