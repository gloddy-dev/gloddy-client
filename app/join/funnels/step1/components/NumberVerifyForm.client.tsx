'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { formatWithoutHyphen, formatWithoutSpace } from '../util';
import { LoginResponse, useLoginMutation, useSMSVerifyMutation } from '@/apis/auth';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';
import { setTokenAtCookie } from '@/utils/auth/tokenController';
import { useRouter } from 'next/navigation';

import type { SignUpState } from '@/app/join/type';
import type { SubmitHandler } from 'react-hook-form';

export default function NumberVerifyForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useJoinContext();

  const { nextStep } = useFunnelContext();
  const { mutate: mutateSMSVerify } = useSMSVerifyMutation();
  const { mutate: mutateLogin } = useLoginMutation();

  const onSubmit: SubmitHandler<Pick<SignUpState, 'phoneNumber' | 'verifyNumber'>> = (data) => {
    mutateSMSVerify(
      {
        number: formatWithoutHyphen(data.phoneNumber),
        code: '' + data.verifyNumber,
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
                  setTokenAtCookie({
                    accessToken,
                    refreshToken,
                    userId,
                  });
                  router.push('/grouping');
                } else {
                  nextStep();
                }
              },
            }
          );
        },
        onError: (error) => {
          console.log(error);
          setError('verify');
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="인증 번호"
        register={register('verifyNumber', {
          required: true,
          pattern: {
            value: regexr.verifyNumber,
            message: '인증번호 6자리를 입력해주세요.',
          },
        })}
        maxLength={6}
      />
      {}
      <Spacing size={18} />
      <Button text="인증번호 확인" type="submit" />
    </form>
  );
}
