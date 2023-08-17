'use client';
import { useTimerContext } from './TimerContext.client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailVerifyMutation } from '@/apis/auth';
import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { BottomSheet, useModalContext } from '@/components/Modal';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { memo } from 'react';

import type { SignUpState } from '@/app/join/type';

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
    <BottomSheet isOpen={isOpen} onClose={closeModal} snap={400} isRightButton>
      <section className="font-700 text-20">
        <p>회원님의 이메일로 </p>
        <p>인증번호를 전송하였습니다.</p>
      </section>

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
          <div className="flex justify-between p-10">
            <p className="text-14 text-gray3 underline ">재전송하기</p>
            <p className="text-orange">
              {Math.floor(timerTime / 60)} : {timerTime % 60}
            </p>
          </div>
        </section>

        <BottomFixedButton text="완료" disabled={!formState.isValid} type="submit" />
      </form>
    </BottomSheet>
  );
});
