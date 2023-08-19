'use client';
import { useTimerContext } from './TimerContext.client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailVerifyMutation } from '@/apis/auth';
import { Button, ButtonGroup } from '@/components/Button';
import { BottomSheet, useModalContext } from '@/components/Modal';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { memo } from 'react';

import type { SignUpState } from '../../../type';

export default memo(function CertificationForm() {
  const { closeModal, modalName } = useModalContext();
  const { time: timerTime } = useTimerContext();
  const hookForm = useJoinContext();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
    setError,
  } = hookForm;
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
    <BottomSheet
      isOpen={isOpen}
      onClose={closeModal}
      snap={300}
      isRightButton
      title="인증번호 입력"
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
            timer={timerTime}
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