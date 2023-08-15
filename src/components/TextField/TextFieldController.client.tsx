'use client';
import TextField, { type TextFieldProps } from './TextField.client';
import { regexr } from '@/constants/regexr';
import Image from 'next/image';
import { useRef } from 'react';
import { Control, useController } from 'react-hook-form';

interface TextFieldControllerProps extends TextFieldProps {
  control: Control<any>;
  name: string;
  rules?: any;
  /**
   * leftCaption에 문구를 표기하는 경우
   */
  caption?: string;
  /**
   * rightCaption에 글자수를 표기하는 경우
   */
  maxCount?: number;
  /**
   * rightCaption에 타이머를 표기하는 경우
   */
  timer?: number;
}

export default function TextFieldController({
  control,
  name,
  rules,
  caption,
  maxCount,
  timer,
  ...TextFieldProps
}: TextFieldControllerProps) {
  const textFieldRef = useRef<HTMLLabelElement>(null);

  const {
    field: { value, onChange },
    fieldState: { invalid, isTouched, isDirty },
    formState: { errors, touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    defaultValue: '',
    rules: {
      required: true,
      pattern: {
        value: regexr.verifyNumber,
        message: '인증번호 6자리를 입력해주세요.',
      },
    },
  });

  const errorMessage = errors[name]?.message;
  const isRightError = maxCount ? value.length > maxCount : false;
  const isLeftError = !!errorMessage || isRightError;
  const isError = isRightError || isLeftError;

  const rightInputIconName = isError ? 'warning' : isDirty ? 'backspace' : '';

  return (
    <TextField
      leftCaption={caption ?? (errorMessage as string) ?? ''}
      rightCaption={maxCount ? `${value.length}/${maxCount}` : timer ? `${timer}초 후 재전송` : ''}
      rightInputIcon={
        rightInputIconName && (
          <Image
            src={`/icons/24/${rightInputIconName}.svg`}
            width={24}
            height={24}
            alt={rightInputIconName}
            // onClick={() => rightInputIconName === 'backspace' && setValue(name, '')}
          />
        )
      }
      isLeftError={isLeftError}
      isRightError={isRightError}
      ref={textFieldRef}
      value={value}
      onChange={onChange}
      {...TextFieldProps}
    />
  );
}
