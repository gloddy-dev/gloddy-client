import { useJoinContext } from '../../../components/JoinContext.client';
import { useEmailVerifyMutation } from '@/apis/auth';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { BottomSheet, type ModalProps } from '@/components/Modal';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { useTimer } from '@/hooks/useTimer';
import { memo } from 'react';

import type { SignUpState } from '../../../type';

interface VerifyBottomSheetProps extends ModalProps {
  onClose: () => void;
  onOkClick: () => void;
  isOpen: boolean;
}

export default memo(function VerifyBottomSheet({
  onClose,
  onOkClick,
  isOpen,
}: VerifyBottomSheetProps) {
  const { t } = useTranslation('join');
  const hookForm = useJoinContext();
  const { register, handleSubmit, setValue, watch, setError, resetField } = hookForm;

  const { time: verifyTime } = useTimer({
    initialTime: 180,
    timerType: 'DECREMENTAL',
    endTime: 0,
    autostart: true,
  });

  const { mutate: mutateEmailVerify } = useEmailVerifyMutation();

  const onSubmit = (data: Pick<SignUpState, 'schoolInfo' | 'verifyEmailNumber'>) => {
    if (!data.verifyEmailNumber || !data.schoolInfo.email) return;
    mutateEmailVerify(
      {
        email: data.schoolInfo.email,
        authCode: +data.verifyEmailNumber,
      },
      {
        onSuccess: () => {
          setValue('schoolInfo.certifiedStudent', true);
          onOkClick();
        },
        onError: () => {
          setError('verifyEmailNumber', {
            type: 'manual',
            message: t('인증 번호를 다시 확인해주세요.'),
          });
        },
      }
    );
  };

  const handleResend = () => {
    if (verifyTime > 120) {
      setError('verifyEmailNumber', {
        type: 'manual',
        message: '인증번호는 1분에 한번만 전송 가능합니다.',
      });
      return;
    }
    onClose();
    resetField('verifyEmailNumber');
  };

  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={[300, 0]}
      title={t('enterVerificationCode')}
      isRightCloseIcon={false}
      isOpen={isOpen}
      disableDrag
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="my-20">
          <TextFieldController
            label={t('인증번호')}
            hookForm={hookForm}
            register={register('verifyEmailNumber', {
              pattern: {
                value: regexr.verifyNumber,
                message: t('인증 번호를 다시 확인해주세요.'),
              },
            })}
            timer={verifyTime}
            type="text"
            pattern="\d*"
            maxLength={6}
          />
        </section>

        <ButtonGroup>
          <Button type="button" onClick={handleResend}>
            {t('resend')}
          </Button>
          <Button type="submit" disabled={!watch('verifyEmailNumber').match(regexr.verifyNumber)}>
            {t('complete')}
          </Button>
        </ButtonGroup>
      </form>
    </BottomSheet>
  );
});
