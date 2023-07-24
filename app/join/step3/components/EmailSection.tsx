import { useEmailMutation } from '@/apis/auth';
import BottomFixedDiv from '@/components/common/BottomFixedDiv';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';
import { TimerStatus } from '@/hooks/useTimer/type';
import useJoinStore from '@/store/useJoinStore';
import useModalStore from '@/store/useModalStore';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import type { Step3InputType } from '../type';

interface EmailSectionProps {
  register: UseFormRegister<Step3InputType>;
  handleSubmit: UseFormHandleSubmit<Step3InputType>;
  email: string;
  isError: boolean;
  timerStart: () => void;
  timerStatus: TimerStatus;
}

export default React.memo(function EmailSection({
  register,
  handleSubmit,
  email,
  isError,
  timerStart,
  timerStatus,
}: EmailSectionProps) {
  const { openModal, modalName } = useModalStore();
  const { setJoinValue } = useJoinStore();
  const { mutate: mutateEmail } = useEmailMutation();
  console.log(modalName);

  const onSubmitEmail: SubmitHandler<Step3InputType> = (data: Step3InputType) => {
    openModal('certification');
    setJoinValue({ email: data.email });
    if (timerStatus === 'STOPPED') {
      timerStart();
    } else {
      // TODO : 인증번호 시간 끝나지 않았을 때에 대한 처리
    }
    // mutateEmail({ email: data.email });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitEmail)}>
      <section>
        <Input
          label="ID"
          register={register('email', {
            required: true,
            pattern: regexr.email,
          })}
        />
      </section>

      <section
        className={clsx('font-500 flex justify-center text-13 text-orange', {
          invisible: !isError,
        })}
      >
        <Image alt="alert" src="/assets/alert.svg" width={10} height={30} />
        <Spacing size={5} direction="horizontal" />
        <span>학교 이메일을 다시 확인해주세요.</span>
      </section>

      <Spacing size={10} />

      <BottomFixedDiv>
        <Button
          text="인증하기"
          type="submit"
          disabled={!!isError || !email || email?.length === 0}
        />

        <Spacing size={8} />

        <Button text="다음에 인증하기" color="orange" href="/join/step4" />
      </BottomFixedDiv>
    </form>
  );
});
