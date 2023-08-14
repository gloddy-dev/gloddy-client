'use client';
import { Spacing } from '../common/Spacing';
import cn from '@/utils/cn';
import { forwardRef, useState } from 'react';

import type { StrictPropsWithChildren } from '@/types';
import type { UseFormRegisterReturn } from 'react-hook-form';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftCaption?: string;
  rightCaption?: string;
  leftInputIcon?: React.ReactNode;
  rightInputIcon?: React.ReactNode;
  isSuccess?: boolean;
  isLeftError?: boolean;
  isRightError?: boolean;
  register?: UseFormRegisterReturn<string>;
  isSpacing?: boolean;
}
export default forwardRef(function TextField(
  {
    label,
    leftCaption,
    rightCaption,
    leftInputIcon,
    rightInputIcon,
    isLeftError = false,
    isRightError = false,
    register,
    isSpacing = true,
    ...props
  }: TextFieldProps,
  textFieldRef: React.ForwardedRef<HTMLLabelElement>
) {
  const isError = isLeftError || isRightError;
  const [isFocus, setIsFocus] = useState(false);

  return (
    <label ref={textFieldRef} htmlFor="textField" className="relative">
      <section
        className={cn('w-full rounded-8 border-1 p-16', {
          'border-border-pressed bg-white': isFocus,
          'border-transparent bg-sub': !isFocus,
          'border-warning bg-warning-color': isError,
        })}
      >
        <Label>{label}</Label>
        <Spacing size={2} />
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
            onFocusCapture={() => {
              setIsFocus(true);
            }}
            onBlurCapture={() => {
              setIsFocus(false);
            }}
            id="textField"
            {...register}
            {...props}
          />
          {rightInputIcon}
        </div>
      </section>
      <section
        className={cn(
          'flex h-18 w-full justify-between px-8 pt-4 text-caption text-sign-tertiary',
          { absolute: !isSpacing }
        )}
      >
        <LeftCaption isError={isLeftError}>{leftCaption}</LeftCaption>
        <RightCaption isError={isRightError}>{rightCaption}</RightCaption>
      </section>
    </label>
  );
});
function Label({ children }: StrictPropsWithChildren) {
  if (!children) return;
  return (
    <label htmlFor="textField" className="block text-caption text-sign-tertiary">
      {children}
    </label>
  );
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
