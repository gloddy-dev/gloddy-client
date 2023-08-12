'use client';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';
import { useRef, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftCaption?: string;
  rightCaption?: string;
  leftInputIcon?: React.ReactNode;
  rightInputIcon?: React.ReactNode;
  isSuccess?: boolean;
  isError?: boolean;
  register?: UseFormRegister<any>;
}
export default function TextField({
  label,
  leftCaption,
  rightCaption,
  leftInputIcon,
  rightInputIcon,
  isSuccess = false,
  isError = false,
  register,
  ...props
}: TextFieldProps) {
  const [isFocus, setIsFocus] = useState(false);
  const textFieldRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(textFieldRef, () => {
    setIsFocus(false);
  });

  return (
    <div ref={textFieldRef}>
      <section
        className={cn('w-full rounded-8 border-1 p-16', {
          'border-border-pressed bg-white': isFocus,
          'border-transparent bg-sub': !isFocus,
          'border-success-cto bg-brand-color': isSuccess,
          'border-warning bg-warning-color': isError,
        })}
      >
        <Label>{label}</Label>
        <div className="relative flex h-24 w-full items-center justify-around">
          {leftInputIcon}
          <input
            className={cn(
              'h-full w-full text-paragraph-1 outline-none placeholder:text-paragraph-1',
              {
                'bg-white': isFocus,
                'bg-sub': !isFocus,
                'bg-brand-color': isSuccess,
                'bg-warning-color': isError,
              }
            )}
            onFocus={() => {
              setIsFocus(true);
            }}
            {...register}
            {...props}
          />
          {rightInputIcon}
        </div>
      </section>
      <section className="flex justify-between px-8 pt-4 text-caption">
        <LeftCaption>{leftCaption}</LeftCaption>
        <RightCaption>{rightCaption}</RightCaption>
      </section>
    </div>
  );
}
function Label({ children }: StrictPropsWithChildren) {
  if (!children) return;
  return <label className="mb-2 text-caption text-sign-tertiary">{children}</label>;
}

interface LeftCaptionProps {
  isError?: boolean;
}

function LeftCaption({ children, isError }: StrictPropsWithChildren<LeftCaptionProps>) {
  if (!children) return;
  return <span className={isError ? 'text-warning' : ''}>{children}</span>;
}
function RightCaption({ children }: StrictPropsWithChildren) {
  if (!children) return;
  return <span>{children}</span>;
}
