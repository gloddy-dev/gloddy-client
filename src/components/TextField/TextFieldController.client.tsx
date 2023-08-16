'use client';
import TextField, { type TextFieldProps } from './TextField.client';
import Image from 'next/image';
import { useRef } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
  UseFormSetValue,
  useController,
} from 'react-hook-form';

// interface TextFieldControllerProps<
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
//   TContext = any
// > extends TextFieldProps {
//   control: Control<TFieldValues, TContext>;
//   name: TName;
//   rules?: Omit<
//     RegisterOptions<TFieldValues, TName>,
//     'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
//   >;
//   setValue: UseFormSetValue<TFieldValues>;
//   readOnly?: boolean;

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

// export default function TextFieldController<TFieldValues extends FieldValues>({
//   control,
//   name,
//   rules,
//   setValue,
//   readOnly = false,
//   caption,
//   maxCount,
//   timer,
//   ...TextFieldProps
// }: TextFieldControllerProps<TFieldValues>) {
//   const textFieldRef = useRef<HTMLLabelElement>(null);

//   const {
//     field: { value, onChange, onBlur },
//     formState: { errors },
//   } = useController<TFieldValues>({
//     name,
//     control,
//     rules,
//   });

//   const errorMessage = errors[name]?.message;
//   const isRightError = maxCount ? value?.length > maxCount : false;
//   const isLeftError = !!errorMessage || isRightError;
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

  const { formState, watch, resetField } = hookForm;
  const inputName = register.name;

  const errorMessage = formState.errors[inputName]?.message;
  const isRightError =
    (maxCount ? watch(inputName).length > maxCount : false) && !formState.isValid;
  const isLeftError = (!!errorMessage || isRightError) && !formState.isValid;
  const isError = isRightError || isLeftError;

  const rightInputIconName = value?.length > 0 ? 'backspace' : isError ? 'warning' : '';

  return (
    <TextField
      // leftCaption={caption ?? (errorMessage as string) ?? ''}
      // rightCaption={maxCount ? `${value?.length}/${maxCount}` : timer ? `${timer}초 후 재전송` : ''}
      // rightInputIcon={
      //   rightInputIconName &&
      //   !readOnly && (
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
            // onClick={() =>
            //   rightInputIconName === 'backspace' &&
            //   setValue(name, 0 as PathValue<TFieldValues, Path<TFieldValues>>)
            // }
            onClick={() => rightInputIconName === 'backspace' && resetField(inputName)}
          />
        )
      }
      readOnly={readOnly}
      isLeftError={isLeftError}
      isRightError={isRightError}
      ref={textFieldRef}
      // value={value}
      // onChange={onChange}
      // onBlur={onBlur}
      // {...TextFieldProps}
      as={as}
      {...props}
    />
  );
}
