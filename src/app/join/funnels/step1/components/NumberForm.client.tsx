import { useJoinContext } from '../../../components/JoinContext';
import { formatNumber, formatNumberBackSpace } from '../util';
import { useSMSMutation } from '@/apis/auth';
import { type SignUpState } from '@/app/join/type';
import { Button, ButtonGroup } from '@/components/Button';
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
  const { setValue, handleSubmit, formState, control } = useJoinContext();
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const phoneNumber = e.currentTarget.value.replace(/[^0-9-]/g, '');
    const phoneNumberWithoutHyphen = phoneNumber.replace(/-/g, '');

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
        rules={{
          required: true,
          pattern: {
            value: regexr.phoneNumber,
            message: '* 휴대폰 번호를 다시 확인해주세요.',
          },
        }}
        control={control}
        name="phoneNumber"
        onChange={handleInputChange}
        onKeyDown={handleInputChange}
        setValue={setValue}
        maxLength={17}
        placeholder="010-0000-0000"
        isSpacing={false}
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
