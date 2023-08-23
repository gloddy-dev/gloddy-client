import { useJoinContext } from '../../../components/JoinContext.client';
import { useEmailVerifyMutation } from '@/apis/auth';
import { Button, ButtonGroup } from '@/components/Button';
import { BottomSheet } from '@/components/Modal';
import { ModalProps } from '@/components/Modal';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { useTimer } from '@/hooks/useTimer';
import { memo } from 'react';

import type { SignUpState } from '../../../type';

interface VerifyBottomSheetProps extends ModalProps {
  onClose: () => void;
  hookForm: ReturnType<typeof useJoinContext>;
  onOkClick: () => void;
}

export default memo(function VerifyBottomSheet({
  onClose,
  hookForm,
  onOkClick,
}: VerifyBottomSheetProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
    setError,
  } = hookForm;
  const { status: timerStatus, time: verifyTime } = useTimer({
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
            message: '인증 번호를 다시 확인해주세요.',
          });
        },
      }
    );
  };

  return (
    <BottomSheet onClose={onClose} snap={300} isRightButton title="인증번호 입력">
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
          <Button type="button">재전송</Button>
          <Button type="submit" disabled={!isValid}>
            확인
          </Button>
        </ButtonGroup>
      </form>
    </BottomSheet>
  );
});
