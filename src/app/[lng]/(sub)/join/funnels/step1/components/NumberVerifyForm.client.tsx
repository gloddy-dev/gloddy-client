import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { formatWithoutHyphen } from '../util';
import { LoginResponse, useLoginMutation, useSMSMutation, useSMSVerifyMutation } from '@/apis/auth';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { LayerLoading } from '@/components/Loading';
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
  const { t } = useTranslation('join');
  const router = useRouter();
  const hookForm = useJoinContext();
  const { handleSubmit, setError, register, watch, resetField } = hookForm;
  const { time, reset, start } = useTimerContext();

  const { nextStep } = useFunnelContext();
  const { mutate: mutateSMSVerify } = useSMSVerifyMutation();
  const { mutate: mutateLogin, status } = useLoginMutation();
  const { mutate: mutateSMS } = useSMSMutation();

  const handleResend = () => {
    if (time > 120) {
      setError('verifyNumber', {
        type: 'validate',
        message: t('인증 번호 재전송은 1분에 한 번만 가능합니다.'),
      });
      return;
    }
    const phoneNumberWithoutHyphen = watch('phoneNumber').replace(/[-\s]/g, '');
    mutateSMS(
      { number: phoneNumberWithoutHyphen },
      { onSuccess: () => setInputStatus('afterSend') }
    );
    resetField('verifyNumber');
    reset();
    start();
  };

  if (time === 0) {
    setError('verifyNumber', {
      type: 'validate',
      message: t('verificationTimeExceeded'),
    });
  }

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
              onSuccess: async (response: LoginResponse) => {
                if (!response.existUser) {
                  nextStep();
                  return;
                }

                await setTokenAtCookie({
                  accessToken: response.token.accessToken,
                  refreshToken: response.token.refreshToken,
                  userId: response.userId,
                });
                router.refresh();
                router.replace('/grouping');
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
        label={t('verifyCode')}
        hookForm={hookForm}
        register={register('verifyNumber', {
          required: true,
          pattern: {
            value: regexr.verifyNumber,
            message: t('inputSix'),
          },
        })}
        maxLength={6}
        type="text"
        pattern="\d*"
        timer={time}
        autoComplete="one-time-code"
      />
      <ButtonGroup isSpacing={false}>
        <Button type="button" onClick={handleResend}>
          {t('resend')}
        </Button>
        <Button type="submit">{t('complete')}</Button>
      </ButtonGroup>
      <LayerLoading isLoading={status === 'loading' || status === 'success'} />
    </form>
  );
}
