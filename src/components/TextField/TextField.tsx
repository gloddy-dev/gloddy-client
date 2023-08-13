'use client';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import cn from '@/utils/cn';
import { forwardRef, useRef, useState } from 'react';

import type { StrictPropsWithChildren } from '@/types';
import type { UseFormRegisterReturn } from 'react-hook-form';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftCaption?: string;
  rightCaption?: string;
  leftInputIcon?: React.ReactNode;
  rightInputIcon?: React.ReactNode;
  isFocus?: boolean;
  isSuccess?: boolean;
  isLeftError?: boolean;
  isRightError?: boolean;
  register?: UseFormRegisterReturn<string>;
}
export default forwardRef(function TextField(
  {
    label,
    leftCaption,
    rightCaption,
    leftInputIcon,
    rightInputIcon,
    isFocus = false,
    isLeftError = false,
    isRightError = false,
    register,
    ...props
  }: TextFieldProps,
  textFieldRef: React.ForwardedRef<HTMLDivElement>
) {
  const isError = isLeftError || isRightError;

  return (
    <div ref={textFieldRef}>
      <section
        className={cn('w-full rounded-8 border-1 p-16', {
          'border-border-pressed bg-white': isFocus,
          'border-transparent bg-sub': !isFocus,
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
                'bg-warning-color': isError,
              }
            )}
            // onFocus={() => {
            //   setIsFocus(true);
            // }}
            {...register}
            {...props}
          />
          {rightInputIcon}
        </div>
      </section>
      <section className="flex justify-between px-8 pt-4 text-caption text-sign-tertiary">
        <LeftCaption isError={isLeftError}>{leftCaption}</LeftCaption>
        <RightCaption isError={isRightError}>{rightCaption}</RightCaption>
      </section>
    </div>
  );
});
function Label({ children }: StrictPropsWithChildren) {
  if (!children) return;
  return <label className="mb-2 text-caption text-sign-tertiary">{children}</label>;
}

interface LeftCaptionProps {
  isError?: boolean;
}

function LeftCaption({ isError, children }: StrictPropsWithChildren<LeftCaptionProps>) {
  if (!children) return;
  return <span className={isError ? 'text-warning' : ''}>{children}</span>;
}
interface RightCaptionProps {
  isError?: boolean;
}

function RightCaption({ isError, children }: StrictPropsWithChildren<RightCaptionProps>) {
  if (!children) return;
  return <span className={isError ? 'text-warning' : ''}>{children}</span>;
}
