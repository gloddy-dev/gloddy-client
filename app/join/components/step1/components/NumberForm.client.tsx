import { useJoinContext } from '../../JoinContext';
import { SignUpRequest, useSMSMutation, useSMSVerifyMutation } from '@/apis/auth';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';
import { SubmitHandler } from 'react-hook-form';

const formatNumber = (phoneNumber: string): string => {
  if (phoneNumber.length > 6)
    return `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(3, 7)} - ${phoneNumber.slice(7)}`;
  if (phoneNumber.length > 2) return `${phoneNumber.slice(0, 3)} - ${phoneNumber.slice(3)}`;
  return phoneNumber;
};

const formatNumberBackSpace = (phoneNumber: string): string => {
  if (phoneNumber.length === 3) return `${phoneNumber.slice(0, 3)}`;
  if (phoneNumber.length === 7) return `${phoneNumber.slice(0, 7)}`;
  return phoneNumber;
};

export default function NumberForm({ inputStatus, setInputStatus }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useJoinContext();

  const { mutate: mutateSMS } = useSMSMutation();

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

  const onSubmitPhoneNumber: SubmitHandler<SignUpRequest> = (data) => {
    const phoneNumberWithoutHyphen = data.phoneNumber.replace(/[-\s]/g, '');
    // mutateSMS({ number: phoneNumberWithoutHyphen });
    // 휴대폰 인증번호 전송 API
    setInputStatus('afterSend');
  };

  return (
    <form onSubmit={handleSubmit(onSubmitPhoneNumber)}>
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
        text={
          inputStatus === 'readyForSend' || inputStatus === 'notReadyForSend'
            ? '인증문자 전송'
            : '인증번호 재전송'
        }
        disabled={inputStatus === 'notReadyForSend'}
        color={inputStatus === 'readyForSend' ? 'blue' : 'orange'}
        type="submit"
      />
    </form>
  );
}
