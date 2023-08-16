'use client';
import TextField, { type TextFieldProps } from './TextField.client';
import Image from 'next/image';
import { useRef } from 'react';

import type { UseFormRegisterReturn, UseFormReturn } from 'react-hook-form';

interface TextFieldControllerProps<T extends React.ElementType> extends TextFieldProps<T> {
  as?: T;
  register: UseFormRegisterReturn<string>;
  hookForm: UseFormReturn<any>;
  /**
   * leftCaption에 문구를 표기하는 경우
   */
  leftCaption?: string;
  /**
   * rightCaption에 글자수를 표기하는 경우
   */
  maxCount?: number;
  /**
   * rightCaption에 타이머를 표기하는 경우
   */
  timer?: number;
}

export default function TextFieldController<T extends React.ElementType>({
  as,
  register,
  hookForm,
  leftCaption,
  maxCount,
  timer,
  ...props
}: TextFieldControllerProps<T> & React.ComponentPropsWithoutRef<T>) {
  const textFieldRef = useRef<HTMLLabelElement>(null);

  const { formState, watch, setValue } = hookForm;
  const inputName = register.name;

  const errorMessage = formState.errors[inputName]?.message;
  const isRightError =
    (maxCount ? watch(inputName).length > maxCount : false) && !formState.isValid;
  const isLeftError = (!!errorMessage || isRightError) && !formState.isValid;
  const isError = isRightError || isLeftError;

  const rightInputIconName = isError ? 'warning' : watch(inputName).length > 0 ? 'backspace' : '';

  console.log(errorMessage as string, leftCaption);

  return (
    <TextField
      leftCaption={(errorMessage as string) ?? leftCaption ?? ''}
      rightCaption={
        maxCount ? `${watch(inputName).length}/${maxCount}` : timer ? `${timer}초 후 재전송` : ''
      }
      rightIcon={
        rightInputIconName &&
        (as === 'input' || as === undefined) && (
          <Image
            src={`/icons/24/${rightInputIconName}.svg`}
            width={24}
            height={24}
            alt={rightInputIconName}
            onClick={() => rightInputIconName === 'backspace' && setValue(inputName, '')}
          />
        )
      }
      isLeftError={isLeftError}
      isRightError={isRightError}
      register={register}
      ref={textFieldRef}
      as={as}
      {...props}
    />
  );
}
