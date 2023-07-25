'use client';
import { useJoinContext } from '../../JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { SignUpRequest, useSMSVerifyMutation } from '@/apis/auth';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { regexr } from '@/constants/regexr';
import { SubmitHandler } from 'react-hook-form';

export default function NumberVerifyForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useJoinContext();

  const { nextStep } = useFunnelContext();
  const { mutate: mutateSMSVerify } = useSMSVerifyMutation();

  const onSubmitCertificateNumber: SubmitHandler<SignUpRequest> = (data) => {
    const phoneNumberWithoutHyphen = data.phoneNumber.replace(/[-\s]/g, '');
    mutateSMSVerify({
      number: phoneNumberWithoutHyphen,
      code: '' + data.certificateNumber,
    });
    // 인증번호 확인 API
    nextStep();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitCertificateNumber)}>
        <Input
          placeholder="인증 번호"
          register={register('certificateNumber', {
            required: true,
            pattern: {
              value: regexr.certificateNumber,
              message: '인증번호 6자리를 입력해주세요.',
            },
          })}
          maxLength={6}
        />
        <div className="h-18" />
        <Button text="인증번호 확인" type="submit" />
      </form>
      {errors.phoneNumber && errors.phoneNumber?.message}
    </>
  );
}
