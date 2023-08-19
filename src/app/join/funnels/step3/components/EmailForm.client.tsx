'use client';
import { useTimerContext } from './TimerContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailMutation } from '@/apis/auth';
import { useJoinContext } from '@/app/join/components/JoinContext.client';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { useModalContext } from '@/components/Modal';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { memo } from 'react';

import type { SignUpState } from '@/app/join/type';

export default memo(function EmailForm() {
  const hookForm = useJoinContext();
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = hookForm;

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

  console.log(errors, 'errors');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFieldController
        label="학교 이메일"
        hookForm={hookForm}
        register={register('schoolInfo.email', {
          required: true,
          pattern: {
            value: regexr.email,
            message: '* 학교 이메일을 다시 확인해주세요.',
          },
        })}
      />
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
