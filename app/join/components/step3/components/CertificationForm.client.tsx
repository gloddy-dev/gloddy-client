'use client';
import { useJoinContext } from '../../JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { SignUpRequest, useEmailVerifyMutation } from '@/apis/auth';
import { BottomFixedButton } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { BottomSheet } from '@/components/common/Modal';
import { regexr } from '@/constants/regexr';
import useModalStore from '@/store/useModalStore';
import { memo } from 'react';

interface BottomSheetFormProps {
  timerTime: number;
}

export default memo(function CertificationForm({ timerTime }: BottomSheetFormProps) {
  const { closeModal, modalName } = useModalStore();
  const { mutate: mutateEmailVerify } = useEmailVerifyMutation();

  const { register, handleSubmit, watch } = useJoinContext();
  const { nextStep } = useFunnelContext();

  const isOpen = modalName === 'certification';

  const onSubmit = (data: SignUpRequest) => {
    mutateEmailVerify({
      email: data.schoolInfo.email,
      authCode: data.certificateEmailNumber,
    });
    closeModal();
    nextStep();
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
            register={register('certificateNumber', {
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
