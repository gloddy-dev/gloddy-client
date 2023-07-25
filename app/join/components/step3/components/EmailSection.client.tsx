'use client';
import { useJoinContext } from '../../JoinContext';
import { SignUpRequest, useEmailMutation } from '@/apis/auth';
import BottomFixedDiv from '@/components/common/BottomFixedDiv';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';
import useModalStore from '@/store/useModalStore';
import clsx from 'clsx';
import Image from 'next/image';
import { memo } from 'react';

import type { TimerStatusType } from '@/hooks/useTimer/type';

interface EmailSectionProps {
  timerStart: () => void;
  timerStatus: TimerStatusType;
}

export default memo(function EmailSection({ timerStart, timerStatus }: EmailSectionProps) {
  const { openModal, modalName } = useModalStore();
  const { mutate: mutateEmail } = useEmailMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    watch,
  } = useJoinContext();
  const email = watch('schoolInfo.email');

  const onSubmitEmail = (data: SignUpRequest) => {
    openModal('certification');
    if (timerStatus === 'STOPPED') {
      timerStart();
    } else {
      // TODO : 인증번호 시간 끝나지 않았을 때에 대한 처리
    }
    // mutateEmail({ email });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitEmail)}>
      <section>
        <Input
          label="ID"
          register={register('schoolInfo.email', {
            required: true,
            pattern: regexr.email,
          })}
        />
      </section>

      <section
        className={clsx('font-500 flex justify-center text-13 text-orange', {
          invisible: !errors.schoolInfo?.email,
        })}
      >
        <Image alt="alert" src="/assets/alert.svg" width={10} height={30} />
        <Spacing size={5} direction="horizontal" />
        <span>학교 이메일을 다시 확인해주세요.</span>
      </section>

      <Spacing size={10} />

      <BottomFixedDiv>
        <Button text="인증하기" type="submit" disabled={!isValid} />

        <Spacing size={8} />

        <Button text="다음에 인증하기" color="orange" href="/join/step4" />
      </BottomFixedDiv>
    </form>
  );
});
