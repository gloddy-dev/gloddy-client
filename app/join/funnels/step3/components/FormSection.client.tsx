'use client';

import CertificationForm from './CertificationForm.client';
import EmailForm from './EmailForm.client';
import { useJoinContext } from '../../JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailMutation } from '@/apis/auth';
import BottomFixedDiv from '@/components/common/BottomFixedDiv';
import { Button } from '@/components/common/Button';
import { useModalContext } from '@/components/common/Modal/ModalContext';
import { Spacing } from '@/components/common/Spacing';
import { useTimer } from '@/hooks/useTimer';

export default function FormSection() {
  const {
    status: timerStatus,
    time,
    start: timerStart,
  } = useTimer({
    initialTime: 180,
    timerType: 'DECREMENTAL',
    endTime: 0,
  });

  const {
    formState: { isValid },
    getValues,
  } = useJoinContext();
  const { nextStep } = useFunnelContext();
  const { openModal } = useModalContext();
  const { mutate: mutateEmail } = useEmailMutation();

  const onSubmitEmail = () => {
    openModal('certification');
    if (timerStatus === 'STOPPED') {
      timerStart();
    } else {
      // TODO : 인증번호 시간 끝나지 않았을 때에 대한 처리
    }
    // mutateEmail({ getValues().schoolInfo.email });
  };

  return (
    <section>
      <EmailForm />

      <CertificationForm timerTime={time} />

      <BottomFixedDiv>
        <Button text="인증하기" disabled={!isValid} onClick={onSubmitEmail} />

        <Spacing size={8} />

        <Button text="다음에 인증하기" color="orange" onClick={nextStep} />
      </BottomFixedDiv>
    </section>
  );
}
