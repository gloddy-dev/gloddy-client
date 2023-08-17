'use client';
import EmailSection from './EmailSection.client';
import { useTimerContext } from './TimerContext';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailMutation } from '@/apis/auth';
import { useJoinContext } from '@/app/join/components/JoinContext';
import { SignUpState } from '@/app/join/type';
import { Button, ButtonGroup } from '@/components/Button';
import BottomFixedDiv from '@/components/common/BottomFixedDiv';
import { Spacing } from '@/components/common/Spacing';
import { useModalContext } from '@/components/Modal';
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
      <ButtonGroup isSpacing={false}>
        <Button onClick={nextStep}>건너뛰기</Button>
        <Spacing size={8} />
        <Button disabled={!isDirty} type="submit">
          확인
        </Button>
      </ButtonGroup>
    </form>
  );
});
