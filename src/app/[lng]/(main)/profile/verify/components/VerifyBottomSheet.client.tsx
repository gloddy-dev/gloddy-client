import { useEmailVerifyMutation } from '@/apis/profile';
import { Button, ButtonGroup } from '@/components/Button';
import { BottomSheet, type ModalProps } from '@/components/Modal';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { useTimer } from '@/hooks/useTimer';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

import type { VerifyType } from '../type';
import type { UseFormReturn } from 'react-hook-form';

interface VerifyBottomSheetProps extends ModalProps {
  onClose: () => void;
  isOpen: boolean;
  hookForm: UseFormReturn<VerifyType>;
}
export default memo(function VerifyBottomSheet({
  onClose,
  isOpen,
  hookForm,
}: VerifyBottomSheetProps) {
  const { register, handleSubmit, setError, resetField, watch } = hookForm;
  const router = useRouter();
  const { time: verifyTime } = useTimer({
    initialTime: 180,
    timerType: 'DECREMENTAL',
    endTime: 0,
    autostart: true,
  });

  const { mutate: mutateEmailVerify } = useEmailVerifyMutation();

  const onSubmit = (data: VerifyType) => {
    if (!data.verifyEmailNumber || !data.email) return;
    mutateEmailVerify(
      {
        email: data.email,
        authCode: +data.verifyEmailNumber,
      },
      {
        onSuccess: () => router.back(),
        onError: () => {
          setError('verifyEmailNumber', {
            type: 'manual',
            message: '인증 번호를 다시 확인해주세요.',
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
      title="인증번호 입력"
      isRightCloseIcon={false}
      isOpen={isOpen}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="my-20">
          <TextFieldController
            label="인증번호"
            hookForm={hookForm}
            register={register('verifyEmailNumber', {
              pattern: {
                value: regexr.verifyNumber,
                message: '인증 번호를 다시 확인해주세요.',
              },
            })}
            maxLength={6}
            timer={verifyTime}
          />
        </section>

        <ButtonGroup>
          <Button type="button" onClick={handleResend}>
            재전송
          </Button>
          <Button type="submit" disabled={!watch('verifyEmailNumber').match(regexr.verifyNumber)}>
            확인
          </Button>
        </ButtonGroup>
      </form>
    </BottomSheet>
  );
});
