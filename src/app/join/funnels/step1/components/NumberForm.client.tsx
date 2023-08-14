import { useJoinContext } from '../../../components/JoinContext';
import { formatNumber, formatNumberBackSpace } from '../util';
import { useSMSMutation } from '@/apis/auth';
import { type SignUpState } from '@/app/join/type';
import { Button } from '@/components/common/Button';
import { Spacing } from '@/components/common/Spacing';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { useTimer } from '@/hooks/useTimer';

import type { StatusType } from '../type';
import type { SubmitHandler } from 'react-hook-form';

interface NumberSectionProps {
  inputStatus: StatusType;
  setInputStatus: React.Dispatch<React.SetStateAction<StatusType>>;
}

export default function NumberForm({ inputStatus, setInputStatus }: NumberSectionProps) {
  const hookForm = useJoinContext();
  const { setValue, handleSubmit, register } = hookForm;
  const { mutate: mutateSMS } = useSMSMutation();
  const {
    status: timerStatus,
    start: timerStart,
    time: leftTime,
  } = useTimer({
    initialTime: 180,
    timerType: 'DECREMENTAL',
    endTime: 0,
  });

  const buttonText =
    inputStatus === 'readyForSend' || inputStatus === 'notReadyForSend'
      ? '인증문자 전송'
      : `${leftTime}초 후 재전송`;
  const buttonColor = inputStatus === 'readyForSend' ? 'blue' : 'orange';

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const phoneNumber = e.currentTarget.value.replace(/[^0-9-]/g, '');
    const phoneNumberWithoutHyphen = phoneNumber.replace(/-/g, '');

    if (phoneNumberWithoutHyphen.length === 11) setInputStatus('readyForSend');
    else setInputStatus('notReadyForSend');

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
        onKeyDown={handleInputChange}
        maxLength={17}
        hookForm={hookForm}
        placeholder="010-0000-0000"
        isSpacing={false}
      />

      <Spacing size={18} />

      <Button
        text={buttonText}
        disabled={inputStatus === 'notReadyForSend' || timerStatus === 'RUNNING'}
        color={buttonColor}
        type="submit"
      />
    </form>
  );
}
