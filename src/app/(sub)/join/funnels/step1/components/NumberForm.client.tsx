'use client';

import { useJoinContext } from '../../../components/JoinContext.client';
import { formatNumber, formatNumberBackSpace } from '../util';
import { useSMSMutation } from '@/apis/auth';
import { Button, ButtonGroup } from '@/components/Button';
import { useTimerContext } from '@/components/Provider';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { ElementType, KeyboardEventHandler } from 'react';

import type { SignUpState } from '../../../type';
import type { StatusType } from '../type';
import type { SubmitHandler } from 'react-hook-form';

interface NumberSectionProps {
  inputStatus: StatusType;
  setInputStatus: React.Dispatch<React.SetStateAction<StatusType>>;
}

export default function NumberForm({ inputStatus, setInputStatus }: NumberSectionProps) {
  const hookForm = useJoinContext();
  const { setValue, handleSubmit, register, formState } = hookForm;
  const { mutate: mutateSMS } = useSMSMutation();
  const { start: timerStart, status: timerStatus } = useTimerContext();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ): any => {
    const phoneNumber = e.currentTarget.value.replace(/[^0-9-]/g, '');
    const phoneNumberWithoutHyphen = phoneNumber.replace(/-/g, '');
    console.log(phoneNumber, phoneNumberWithoutHyphen);

    if ('key' in e && e.key === 'Backspace') {
      setValue('phoneNumber', formatNumberBackSpace(phoneNumberWithoutHyphen));
    } else {
      setValue('phoneNumber', formatNumber(phoneNumberWithoutHyphen));
    }
  };

  const onSubmit: SubmitHandler<Pick<SignUpState, 'phoneNumber'>> = (data) => {
    if (timerStatus === 'RUNNING') return;
    timerStart();
    const phoneNumberWithoutHyphen = data.phoneNumber.replace(/[-\s]/g, '');
    mutateSMS(
      { number: phoneNumberWithoutHyphen },
      { onSuccess: () => setInputStatus('afterSend') }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Spacing size={8} />
      <TextFieldController
        label="휴대폰 번호"
        register={register('phoneNumber', {
          required: true,
          pattern: {
            value: regexr.phoneNumber,
            message: '* 휴대폰 번호를 다시 확인해주세요.',
          },
          onChange: handleInputChange,
        })}
        onKeyDown={handleInputChange as unknown as KeyboardEventHandler<ElementType<any>>}
        maxLength={13}
        hookForm={hookForm}
        placeholder="010-0000-0000"
        isSpacing={false}
        readOnly={inputStatus === 'afterSend'}
        isLeftCaptionWrap={false}
      />

      <Spacing size={8} />
      {inputStatus === 'beforeSend' && (
        <ButtonGroup isSpacing={false}>
          <Button disabled={!formState.isValid || timerStatus === 'RUNNING'} type="submit">
            인증번호 전송
          </Button>
        </ButtonGroup>
      )}
    </form>
  );
}
