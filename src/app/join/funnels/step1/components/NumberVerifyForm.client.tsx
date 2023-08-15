'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { formatWithoutHyphen, formatWithoutSpace } from '../util';
import { LoginResponse, useLoginMutation, useSMSVerifyMutation } from '@/apis/auth';
import { ButtonGroup } from '@/components/Button';
import { Button } from '@/components/common/Button';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { setTokenAtCookie } from '@/utils/auth/tokenController';
import { useRouter } from 'next/navigation';
import { type SubmitHandler } from 'react-hook-form';

import type { SignUpState } from '@/app/join/type';

export default function NumberVerifyForm() {
  const router = useRouter();
  const { handleSubmit, setError, control, setValue } = useJoinContext();

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
        onError: () => {
          setError('verifyNumber', {
            type: 'validate',
          });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFieldController
        label="인증 번호"
        control={control}
        name="verifyNumber"
        setValue={setValue}
        rules={{
          required: true,
          pattern: {
            value: regexr.verifyNumber,
            message: '인증번호 6자리를 입력해주세요.',
          },
        }}
        maxLength={6}
      />
      <ButtonGroup isSpacing={false}>
        <Button>재전송</Button>
        <Button type="submit">확인</Button>
      </ButtonGroup>
    </form>
  );
}
