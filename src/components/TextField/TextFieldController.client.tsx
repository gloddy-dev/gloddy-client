'use client';
import TextField, { type TextFieldProps } from './TextField.client';
import Image from 'next/image';
import { useRef } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormSetValue,
  useController,
} from 'react-hook-form';

interface TextFieldControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends TextFieldProps {
  control: Control<TFieldValues>;
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  setValue: UseFormSetValue<TFieldValues>;
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

export default function TextFieldController<TFieldValues extends FieldValues>({
  control,
  name,
  rules,
  setValue,
  caption,
  maxCount,
  timer,
  ...TextFieldProps
}: TextFieldControllerProps<TFieldValues>) {
  const textFieldRef = useRef<HTMLLabelElement>(null);

  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, isTouched, isDirty },
    formState: { errors, touchedFields, dirtyFields },
  } = useController<TFieldValues>({
    name,
    control,
    rules,
  });

  const errorMessage = errors[name]?.message;
  const isRightError = maxCount ? value?.length > maxCount : false;
  const isLeftError = !!errorMessage || isRightError;
  const isError = isRightError || isLeftError;

  const rightInputIconName = isError ? 'warning' : value?.length > 0 ? 'backspace' : '';

  return (
    <TextField
      leftCaption={caption ?? (errorMessage as string) ?? ''}
      rightCaption={maxCount ? `${value?.length}/${maxCount}` : timer ? `${timer}초 후 재전송` : ''}
      rightInputIcon={
        rightInputIconName && (
          <Image
            src={`/icons/24/${rightInputIconName}.svg`}
            width={24}
            height={24}
            alt={rightInputIconName}
            onClick={() => rightInputIconName === 'backspace' && setValue(name, 0)}
          />
        )
      }
      isLeftError={isLeftError}
      isRightError={isRightError}
      ref={textFieldRef}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...TextFieldProps}
    />
  );
}
