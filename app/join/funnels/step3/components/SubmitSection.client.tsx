'use client';

import { useTimerContext } from './TimerContext';
import { useJoinContext } from '../../../components/JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailMutation } from '@/apis/auth';
import BottomFixedDiv from '@/components/common/BottomFixedDiv';
import { Button } from '@/components/common/Button';
import { useModalContext } from '@/components/common/Modal/ModalContext';
import { Spacing } from '@/components/common/Spacing';

export default function SubmitSection() {
  const {
    formState: { isDirty, errors },
  } = useJoinContext();
  const { nextStep } = useFunnelContext();

  return (
    <BottomFixedDiv>
      <Button text="인증하기" disabled={!isDirty} type="submit" />
      <Spacing size={8} />
      <Button text="다음에 인증하기" color="orange" onClick={nextStep} />
    </BottomFixedDiv>
  );
}
