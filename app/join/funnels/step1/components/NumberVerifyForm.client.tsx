'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { LoginResponse, useLoginMutation, useSMSVerifyMutation } from '@/apis/auth';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';

import type { SignUpState } from '@/app/join/type';
import type { SubmitHandler } from 'react-hook-form';

export default function NumberVerifyForm() {
  const { register, handleSubmit } = useJoinContext();

  const { nextStep } = useFunnelContext();
  const { mutate: mutateSMSVerify } = useSMSVerifyMutation();
  const { mutate: mutateLogin } = useLoginMutation();

  const onSubmit: SubmitHandler<Pick<SignUpState, 'phoneNumber' | 'certificateNumber'>> = (
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
          mutateLogin(
            { phoneNumber: data.phoneNumber },
            {
              onSuccess: (response: LoginResponse) => {
                if (response.existUser) {
                  // TODO : 토큰 설정 & home으로 이동
                } else {
                  nextStep();
                }
              },
            }
          );
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
