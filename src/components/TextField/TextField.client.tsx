'use client';
import { Spacing } from '../common/Spacing';
import cn from '@/utils/cn';
import { forwardRef, useState } from 'react';

import type { UseFormRegisterReturn } from 'react-hook-form';

export interface TextFieldProps<T extends React.ElementType> {
  as?: T;
  label?: string;
  leftCaption?: string;
  rightCaption?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isSuccess?: boolean;
  isLeftError?: boolean;
  isRightError?: boolean;
  register?: UseFormRegisterReturn<string>;
  isSpacing?: boolean;
  readOnly?: boolean;
}

function TextField<T extends React.ElementType = 'input'>(
  {
    as,
    label,
    leftCaption,
    rightCaption,
    leftIcon,
    rightIcon,
    isLeftError = false,
    isRightError = false,
    register,
    isSpacing = true,
    readOnly = false,
    ...props
  }: TextFieldProps<T> & React.ComponentPropsWithoutRef<T>,
  textFieldRef: React.ForwardedRef<HTMLLabelElement>
) {
  const isError = isLeftError || isRightError;
  const [isFocus, setIsFocus] = useState(false);
  const Element = as || 'input';

  return (
    <label ref={textFieldRef} htmlFor="textField" className="relative">
      <section
        className={cn('w-full rounded-8 border-1 p-16', {
          'border-border-pressed bg-white': isFocus,
          'border-transparent bg-sub': !isFocus,
          'border-warning bg-warning-color': isError,
          'border-transparent bg-divider': readOnly,
        })}
      >
        <Label>{label}</Label>
        <Spacing size={2} />
        <div
          className={cn('relative flex h-142 w-full items-center justify-around', {
            'h-142': Element === 'textarea',
            'h-24': Element === 'input',
          })}
        >
          {leftIcon}
          <Element
            className={cn(
              'h-full w-full resize-none text-paragraph-1 outline-none placeholder:text-paragraph-1',
              {
                'bg-white': isFocus,
                'bg-sub': !isFocus,
                'bg-warning-color': isError,
                'bg-divider': readOnly,
              }
            )}
            onFocusCapture={() => !readOnly && setIsFocus(true)}
            onBlurCapture={() => setIsFocus(false)}
            id="textField"
            readOnly={readOnly}
            {...register}
            {...props}
          />
          {rightIcon}
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
}

interface LabelProps {
  children?: string;
}

function Label({ children }: LabelProps) {
  if (!children) return;
  return <p className="block text-caption text-sign-tertiary">{children}</p>;
}

interface LeftCaptionProps {
  isError?: boolean;
  children?: string;
}

function LeftCaption({ isError, children }: LeftCaptionProps) {
  if (!children) return <div />;
  return <span className={isError ? 'text-warning' : ''}>{children}</span>;
}
interface RightCaptionProps {
  isError?: boolean;
  children?: string;
}

function RightCaption({ isError, children }: RightCaptionProps) {
  if (!children) return <div />;
  return <span className={isError ? 'text-warning' : ''}>{children}</span>;
}

export default forwardRef(TextField);
