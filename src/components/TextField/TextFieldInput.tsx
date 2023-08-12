import TextField, { TextFieldProps } from './TextField';
import Image from 'next/image';
import { UseFormReturn } from 'react-hook-form';

interface TextFieldInputProps extends TextFieldProps {
  register: any;
  hookForm: UseFormReturn<any>;
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
export default function TextFieldInput({
  register,
  hookForm,
  caption,
  maxCount,
  timer,
  ...TextFieldProps
}: TextFieldInputProps) {
  const { formState, watch, setValue } = hookForm;
  const inputName = register.name;
  const errorMessage = formState.errors[inputName]?.message;

  const rightInputIconName = errorMessage
    ? 'warning'
    : watch(inputName).length > 0
    ? 'backspace'
    : '';

  return (
    <TextField
      isSuccess={formState.isValid}
      isError={!!errorMessage}
      leftCaption={caption ?? String(errorMessage)}
      rightCaption={
        maxCount ? `${watch(inputName).length}/${maxCount}` : timer ? `${timer}초 후 재전송` : ''
      }
      rightInputIcon={
        <Image
          src={`/icons/24/${rightInputIconName}.svg`}
          width={24}
          height={24}
          alt={rightInputIconName}
          onClick={() => rightInputIconName === 'backspace' && setValue(inputName, '')}
        />
      }
      {...TextFieldProps}
      register={...register}
    />
  );
}
