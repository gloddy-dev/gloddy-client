'use client';

import { useJoinContext } from '../../../components/JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailMutation } from '@/apis/auth';
import BottomFixedDiv from '@/components/common/BottomFixedDiv';
import { Button } from '@/components/common/Button';
import { useStep3Context } from '@/components/common/Modal/Step3Context';
import { Spacing } from '@/components/common/Spacing';

export default function SubmitSection() {
  const {
    formState: { isValid },
    getValues,
  } = useJoinContext();
  const { nextStep } = useFunnelContext();
  const { mutate: mutateEmail } = useEmailMutation();
  const { openModal, status: timerStatus, start: timerStart } = useStep3Context();

  const onSubmit = () => {
    mutateEmail(
      { email: getValues().schoolInfo.email || '' },
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
    <BottomFixedDiv>
      <Button text="인증하기" disabled={!isValid} onClick={onSubmit} />

      <Spacing size={8} />

      <Button text="다음에 인증하기" color="orange" onClick={nextStep} />
    </BottomFixedDiv>
  );
}
