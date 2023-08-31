import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { formatWithoutHyphen } from '../util';
import { LoginResponse, useLoginMutation, useSMSVerifyMutation } from '@/apis/auth';
import { Button, ButtonGroup } from '@/components/Button';
import { useTimerContext } from '@/components/Provider';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { setTokenAtCookie } from '@/utils/auth/tokenController';
import { useRouter } from 'next/navigation';

import type { SignUpState } from '../../../type';
import type { SubmitHandler } from 'react-hook-form';

interface NumberVerifyFormProps {
  setInputStatus: React.Dispatch<React.SetStateAction<'beforeSend' | 'afterSend'>>;
}

export default function NumberVerifyForm({ setInputStatus }: NumberVerifyFormProps) {
  const router = useRouter();
  const hookForm = useJoinContext();
  const { handleSubmit, setError, register } = hookForm;
  const { time, status } = useTimerContext();

  const { nextStep } = useFunnelContext();
  const { mutate: mutateSMSVerify } = useSMSVerifyMutation();
  const { mutate: mutateLogin } = useLoginMutation();

  const handleResend = () => {
    console.log(time);
    if (time > 120) {
      setError('verifyNumber', {
        type: 'validate',
        message: '인증 번호 재전송은 1분에 한 번만 가능합니다.',
      });
      return;
    }
    setInputStatus('beforeSend');
  };

  const onSubmit: SubmitHandler<Pick<SignUpState, 'phoneNumber' | 'verifyNumber'>> = (data) => {
    mutateSMSVerify(
      {
        number: formatWithoutHyphen(data.phoneNumber),
        code: '' + data.verifyNumber,
      },
      {
        onSuccess: () => {
          mutateLogin(
            { phoneNumber: data.phoneNumber },
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
            message: '인증번호가 잘못되었습니다.',
          });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFieldController
        label="인증 번호"
        hookForm={hookForm}
        register={register('verifyNumber', {
          required: true,
          pattern: {
            value: regexr.verifyNumber,
            message: '인증번호 6자리를 입력해주세요.',
          },
        })}
        maxLength={6}
        timer={time}
      />
      <ButtonGroup isSpacing={false}>
        <Button type="button" onClick={handleResend}>
          재전송
        </Button>
        <Button type="submit">확인</Button>
      </ButtonGroup>
    </form>
  );
}
