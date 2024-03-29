'use client';
import { forwardRef, useEffect, useState } from 'react';

import { Spacing } from '../Spacing';

import type { UseFormRegisterReturn } from 'react-hook-form';

import cn from '@/utils/cn';

export interface TextFieldProps<T extends React.ElementType = 'input'>
  extends React.HTMLAttributes<T> {
  as?: T;
  register?: UseFormRegisterReturn<string>;
  label?: string;
  leftCaption?: string;
  rightCaption?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isSuccess?: boolean;
  isLeftError?: boolean;
  isRightError?: boolean;
  isLeftCaptionWrap?: boolean;
  isSpacing?: boolean;
  readOnly?: boolean;
  className?: string;
}

let elementId = 1;

function TextField<T extends React.ElementType = 'input'>(
  {
    as,
    register,
    label,
    leftCaption,
    rightCaption,
    leftIcon,
    rightIcon,
    isLeftError = false,
    isRightError = false,
    isLeftCaptionWrap = true,
    isSpacing = true,
    readOnly = false,
    className,
    ...props
  }: TextFieldProps<T> & React.ComponentPropsWithoutRef<T>,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const isError = isLeftError || isRightError;
  const [isFocus, setIsFocus] = useState(false);
  const Element = as || 'input';

  const [id, setId] = useState<number | null>(null);

  useEffect(() => {
    setId(elementId++);
  }, []);

  return (
    <label htmlFor={'' + id} className="relative">
      <section
        className={cn(
          'rounded-8 border-1 w-full p-16',
          {
            'border-border-pressed bg-white': isFocus,
            'bg-sub border-transparent': !isFocus,
            'border-warning bg-warning-color': isError,
            'bg-divider border-transparent': readOnly,
            'h-142': as === 'textarea',
          },
          className
        )}
      >
        {label && (
          <>
            <Label text={label} />
            <Spacing size={2} />
          </>
        )}
        <div className="relative flex h-full w-full items-center justify-around">
          {leftIcon}
          <Element
            ref={ref}
            className={cn(
              'text-paragraph-1 placeholder:text-paragraph-1 placeholder:text-sign-caption w-full resize-none outline-none',
              {
                'bg-white': isFocus,
                'bg-sub': !isFocus,
                'bg-warning-color': isError,
                'bg-divider placeholder:text-sign-tertiary': readOnly,
                'indent-8': !!leftIcon,
                'h-24': as === 'input',
                'scroll-my-100 h-full overflow-y-scroll ': as === 'textarea',
              }
            )}
            onFocusCapture={() => !readOnly && setIsFocus(true)}
            onBlurCapture={() => setIsFocus(false)}
            id={id}
            readOnly={readOnly}
            {...register}
            {...props}
          />
          {rightIcon}
        </div>
      </section>
      {(!!leftCaption || !!rightCaption) && (
        <section
          className={cn('text-caption text-sign-tertiary flex w-full justify-between px-8 pt-4', {
            absolute: !isSpacing,
          })}
        >
          <LeftCaption
            isError={isLeftError}
            text={leftCaption}
            isLeftCaptionWrap={isLeftCaptionWrap}
          />
          <RightCaption isError={isRightError} text={rightCaption} />
        </section>
      )}
    </label>
  );
}

interface LabelProps {
  text?: string;
}

function Label({ text }: LabelProps) {
  if (!text) return;
  return <p className="text-caption text-sign-tertiary block">{text}</p>;
}

interface LeftCaptionProps {
  isError?: boolean;
  text?: string;
  isLeftCaptionWrap?: boolean;
}

function LeftCaption({ isError, text, isLeftCaptionWrap }: LeftCaptionProps) {
  if (!text) return <div />;
  return (
    <span className={cn({ 'text-warning': isError, 'whitespace-nowrap': !isLeftCaptionWrap })}>
      {text}
    </span>
  );
}
interface RightCaptionProps {
  isError?: boolean;
  text?: string;
}

function RightCaption({ isError, text }: RightCaptionProps) {
  if (!text) return <div />;
  return <span className={cn({ 'text-warning': isError })}>{text}</span>;
}

export default forwardRef(TextField) as <T extends React.ElementType = 'input'>(
  props: TextFieldProps<T> &
    React.ComponentPropsWithoutRef<T> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => React.ReactElement;
