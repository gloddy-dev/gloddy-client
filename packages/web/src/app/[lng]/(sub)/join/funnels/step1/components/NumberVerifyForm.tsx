import { useJoinContext } from '../../../components/JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { formatWithoutHyphen } from '../util';

import type { SignUpState } from '../../../type';
import type { SubmitHandler } from 'react-hook-form';

import { LoginResponse, useLoginMutation, useSMSMutation, useSMSVerifyMutation } from '@/apis/auth';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { LayerLoading } from '@/components/Loading';
import { useTimerContext } from '@/components/Provider';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';

interface NumberVerifyFormProps {
  setInputStatus: React.Dispatch<React.SetStateAction<'beforeSend' | 'afterSend'>>;
}

export default function NumberVerifyForm({ setInputStatus }: NumberVerifyFormProps) {
  const { t } = useTranslation('join');
  const hookForm = useJoinContext();
  const { handleSubmit, setError, register, watch, resetField } = hookForm;
  const { time, reset, start } = useTimerContext();

  const { nextStep } = useFunnelContext();
  const { mutate: mutateSMSVerify } = useSMSVerifyMutation();
  const { mutateAsync: mutateLogin, status } = useLoginMutation();
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
        onSuccess: async () => {
          const response = await mutateLogin({ phoneNumber: data.phoneNumber });

          if (!response.existUser) {
            nextStep();
            return;
          }
        },
        onError: () => {
          setError('verifyNumber', {
            type: 'validate',
            message: t('인증 번호를 다시 확인해주세요.'),
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
        type="tel"
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
      <LayerLoading isPending={status === 'pending' || status === 'success'} />
    </form>
  );
}
