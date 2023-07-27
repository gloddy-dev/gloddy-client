'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { useSMSVerifyMutation } from '@/apis/auth';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';

import type { SignUpStateType } from '@/app/join/type';
import type { SubmitHandler } from 'react-hook-form';

export default function NumberVerifySection() {
  const { register, handleSubmit } = useJoinContext();

  const { nextStep } = useFunnelContext();
  const { mutate: mutateSMSVerify } = useSMSVerifyMutation();

  const onSubmit: SubmitHandler<Pick<SignUpStateType, 'phoneNumber' | 'certificateNumber'>> = (
    data
  ) => {
    const phoneNumberWithoutHyphen = data.phoneNumber.replace(/[-\s]/g, '');
    mutateSMSVerify(
      {
        number: phoneNumberWithoutHyphen,
        code: '' + data.certificateNumber,
      },
      {
        onSuccess: () => {
          nextStep();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Spacing size={18} />
      <Button text="인증번호 확인" type="submit" />
    </form>
  );
}
