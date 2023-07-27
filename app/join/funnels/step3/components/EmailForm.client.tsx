'use client';
import EmailSection from './EmailSection.client';
import SubmitSection from './SubmitSection.client';
import { useTimerContext } from './TimerContext';
import { useEmailMutation } from '@/apis/auth';
import { useJoinContext } from '@/app/join/components/JoinContext';
import { SignUpStateType } from '@/app/join/type';
import { useModalContext } from '@/components/common/Modal/ModalContext';
import { memo } from 'react';

export default memo(function EmailForm() {
  const { mutate: mutateEmail } = useEmailMutation();
  const { status: timerStatus, start: timerStart } = useTimerContext();
  const { openModal } = useModalContext();
  const { getValues, handleSubmit } = useJoinContext();

  const onSubmit = (data: Pick<SignUpStateType, 'schoolInfo'>) => {
    mutateEmail(
      { email: data.schoolInfo.email || '' },
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
      <SubmitSection />
    </form>
  );
});
