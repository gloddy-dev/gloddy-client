'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { formatWithoutHyphen, formatWithoutSpace } from '../util';
import { LoginResponse, useLoginMutation, useSMSVerifyMutation } from '@/apis/auth';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation';

import type { SignUpState } from '@/app/join/type';
import type { SubmitHandler } from 'react-hook-form';

export default function NumberVerifyForm() {
  const router = useRouter();
  const { register, handleSubmit } = useJoinContext();

  const { nextStep } = useFunnelContext();
  const { mutate: mutateSMSVerify } = useSMSVerifyMutation();
  const { mutate: mutateLogin } = useLoginMutation();

  const { userLogin } = useUser();

  const onSubmit: SubmitHandler<Pick<SignUpState, 'phoneNumber' | 'certificateNumber'>> = (
    data
  ) => {
    mutateSMSVerify(
      {
        number: formatWithoutHyphen(data.phoneNumber),
        code: '' + data.certificateNumber,
      },
      {
        onSuccess: () => {
          mutateLogin(
            { phoneNumber: formatWithoutSpace(data.phoneNumber) },
            {
              onSuccess: (response: LoginResponse) => {
                if (response.existUser) {
                  const {
                    token: { accessToken, refreshToken },
                    userId,
                  } = response;
                  userLogin({ accessToken, refreshToken, userId });
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
