'use client';
import { useTimerContext } from './TimerContext';
import { useJoinContext } from '../../../components/JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailVerifyMutation } from '@/apis/auth';
import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { BottomSheet } from '@/components/common/Modal';
import { useModalContext } from '@/components/common/Modal/ModalContext';
import { regexr } from '@/constants/regexr';
import { memo } from 'react';

import type { SignUpState } from '@/app/join/type';

export default memo(function CertificationForm() {
  const { closeModal, modalName } = useModalContext();
  const { time: timerTime } = useTimerContext();
  const { register, handleSubmit, watch, setValue } = useJoinContext();
  const { nextStep } = useFunnelContext();

  const { mutate: mutateEmailVerify } = useEmailVerifyMutation();

  const isOpen = modalName === 'certification';

  const onSubmit = (data: Pick<SignUpState, 'schoolInfo' | 'certificateEmailNumber'>) => {
    if (!data.certificateEmailNumber || !data.schoolInfo.email) return;
    mutateEmailVerify(
      {
        email: data.schoolInfo.email,
        authCode: data.certificateEmailNumber,
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
      <section className="text-20 font-700">
        <p>회원님의 이메일로 </p>
        <p>인증번호를 전송하였습니다.</p>
      </section>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="my-20">
          <Input
            label="인증번호"
            register={register('certificateEmailNumber', {
              pattern: {
                value: regexr.certificateNumber,
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

        <BottomFixedButton
          text="완료"
          disabled={('' + watch('certificateNumber'))?.length < 6 || !watch('certificateNumber')}
          type="submit"
        />
      </form>
    </BottomSheet>
  );
});
