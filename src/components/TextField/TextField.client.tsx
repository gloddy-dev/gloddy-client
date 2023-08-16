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
        <Label text={label} />
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
        <LeftCaption isError={isLeftError} text={leftCaption}></LeftCaption>
        <RightCaption isError={isRightError} text={rightCaption}></RightCaption>
      </section>
    </label>
  );
}

interface LabelProps {
  text?: string;
}

function Label({ text }: LabelProps) {
  if (!text) return;
  return <p className="block text-caption text-sign-tertiary">{text}</p>;
}

interface LeftCaptionProps {
  isError?: boolean;
  text?: string;
}

function LeftCaption({ isError, text }: LeftCaptionProps) {
  if (!text) return <div />;
  return <span className={isError ? 'text-warning' : ''}>{text}</span>;
}
interface RightCaptionProps {
  isError?: boolean;
  text?: string;
}

function RightCaption({ isError, text }: RightCaptionProps) {
  if (!text) return <div />;
  return <span className={isError ? 'text-warning' : ''}>{text}</span>;
}

export default forwardRef(TextField);
