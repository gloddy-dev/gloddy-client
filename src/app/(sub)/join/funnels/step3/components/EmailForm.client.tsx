'use client';
import { useTimerContext } from './TimerContext.client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailMutation } from '@/apis/auth';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Modal, useModalContext } from '@/components/Modal';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { useOverlay } from '@/hooks/useOverlay';
import Image from 'next/image';
import { memo } from 'react';

import type { SignUpState } from '../../../type';

export default memo(function EmailForm() {
  const hookForm = useJoinContext();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty },
  } = hookForm;

  const { nextStep } = useFunnelContext();
  const { openModal } = useModalContext();
  const { status: timerStatus, start: timerStart } = useTimerContext();
  const { open } = useOverlay();

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

  const handlePassClick = () => {
    open(({ exit }) => (
      <Modal
        isOpen={true}
        variant="warning"
        onOkClick={() => {
          setValue('schoolInfo.email', '');
          nextStep();
        }}
        onCancelClick={exit}
      >
        <Spacing size={32} />
        <Image src="/icons/48/warning.svg" width={48} height={48} alt="warning" />
        <Spacing size={12} />
        <p className="text-subtitle-1">재학생 인증을 건너뛰시겠습니까?</p>
        <Spacing size={4} />
        <p className="text-sign-tertiary">
          회원가입 후 개인 프로필에서
          <br />
          재학생 인증을 진행할 수 있어요.
        </p>
        <Spacing size={16} />
      </Modal>
    ));
  };

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
        <Button onClick={handlePassClick}>건너뛰기</Button>
        <Button disabled={!isDirty} type="submit">
          확인
        </Button>
      </ButtonGroup>
    </form>
  );
});
