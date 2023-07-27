import { useJoinContext } from '../../../components/JoinContext';
import { formatNumber, formatNumberBackSpace } from '../util';
import { useSMSMutation } from '@/apis/auth';
import { type SignUpState } from '@/app/join/type';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';

import type { StatusType } from '../type';
import type { SubmitHandler } from 'react-hook-form';

interface NumberSectionProps {
  inputStatus: StatusType;
  setInputStatus: React.Dispatch<React.SetStateAction<StatusType>>;
}

export default function NumberSection({ inputStatus, setInputStatus }: NumberSectionProps) {
  const { register, handleSubmit, setValue } = useJoinContext();
  const { mutate: mutateSMS } = useSMSMutation();
  const buttonText =
    inputStatus === 'readyForSend' || inputStatus === 'notReadyForSend'
      ? '인증문자 전송'
      : '인증번호 재전송';
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
    const phoneNumberWithoutHyphen = data.phoneNumber.replace(/[-\s]/g, '');
    mutateSMS(
      { number: phoneNumberWithoutHyphen },
      { onSuccess: () => setInputStatus('afterSend') }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="휴대폰 번호"
        register={register('phoneNumber', {
          required: true,
          pattern: {
            value: regexr.phoneNumber,
            message: '올바른 휴대폰 번호를 입력해주세요.',
          },
          onChange: handleInputChange,
        })}
        onKeyDown={handleInputChange}
        maxLength={17}
      />

      <Spacing size={18} />

      <Button
        text={buttonText}
        disabled={inputStatus === 'notReadyForSend'}
        color={buttonColor}
        type="submit"
      />
    </form>
  );
}
