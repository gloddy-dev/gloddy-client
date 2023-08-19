'use client';
import { useTimerContext } from './TimerContext.client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailVerifyMutation } from '@/apis/auth';
import { Button, ButtonGroup } from '@/components/Button';
import { BottomFixedButton } from '@/components/common/Button';
import { BottomSheet, useModalContext } from '@/components/Modal';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { memo } from 'react';

import type { SignUpState } from '../../../type';

export default memo(function CertificationForm() {
  const { closeModal, modalName } = useModalContext();
  const { time: timerTime } = useTimerContext();
  const hookForm = useJoinContext();
  const { register, handleSubmit, setValue, formState } = hookForm;
  const { nextStep } = useFunnelContext();

  const { mutate: mutateEmailVerify } = useEmailVerifyMutation();

  const isOpen = modalName === 'certification';

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
          nextStep();
        },
      }
    );
  };

  return (
    <BottomSheet isOpen={true} onClose={closeModal} snap={330} isRightButton title="인증번호 입력">
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
          />
        </section>

        <ButtonGroup>
          <Button type="button">재전송</Button>
          <Button type="submit" disabled={!formState.isValid}>
            확인
          </Button>
        </ButtonGroup>
      </form>
    </BottomSheet>
  );
});
