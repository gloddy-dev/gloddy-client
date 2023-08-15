'use client';
import EmailSection from './EmailSection.client';
import { useTimerContext } from './TimerContext';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailMutation } from '@/apis/auth';
import { useJoinContext } from '@/app/join/components/JoinContext';
import { SignUpState } from '@/app/join/type';
import BottomFixedDiv from '@/components/common/BottomFixedDiv';
import { Button } from '@/components/common/Button';
import { useModalContext } from '@/components/common/Modal/ModalContext.client';
import { Spacing } from '@/components/common/Spacing';
import { memo } from 'react';

export default memo(function EmailForm() {
  const {
    handleSubmit,
    formState: { isDirty },
  } = useJoinContext();
  const { nextStep } = useFunnelContext();
  const { openModal } = useModalContext();
  const { status: timerStatus, start: timerStart } = useTimerContext();

  const { mutate: mutateEmail } = useEmailMutation();

  const onSubmit = (data: Pick<SignUpState, 'schoolInfo'>) => {
    if (!data.schoolInfo.email) return;
    mutateEmail(
      { email: data.schoolInfo.email },
      {
        onSuccess: () => {
          openModal('certification');
          if (timerStatus === 'STOPPED') {
            timerStart();
          } else {
            // TODO : 인증번호 시간 끝나지 않았을 때에 대한 처리
          }
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailSection />
      <BottomFixedDiv>
        <Button text="인증하기" disabled={!isDirty} type="submit" />
        <Spacing size={8} />
        <Button text="다음에 인증하기" color="orange" onClick={nextStep} />
      </BottomFixedDiv>
    </form>
  );
});
