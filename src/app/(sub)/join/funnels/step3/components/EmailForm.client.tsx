'use client';
import CertificateSkipModal from './CertificateSkipModal.client';
import VerifyBottomSheet from './VerifyBottomSheet.client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailMutation } from '@/apis/auth';
import { Button, ButtonGroup } from '@/components/Button';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { useModal } from '@/hooks/useModal';
import { useTimer } from '@/hooks/useTimer';
import { memo } from 'react';

import type { SignUpState } from '../../../type';

export default memo(function EmailForm() {
  const { nextStep } = useFunnelContext();
  const {
    status: timerStatus,
    start: timerStart,
    time: verifyTime,
  } = useTimer({
    initialTime: 180,
    timerType: 'DECREMENTAL',
    endTime: 0,
  });

  const { open } = useModal();
  const { mutate: mutateEmail } = useEmailMutation();
  const hookForm = useJoinContext();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty },
  } = hookForm;

  console.log(verifyTime);

  const onSubmit = (data: Pick<SignUpState, 'schoolInfo'>) => {
    if (!data.schoolInfo.email) return;
    mutateEmail(
      { email: data.schoolInfo.email },
      {
        onSuccess: () => {
          open(({ exit }) => (
            <VerifyBottomSheet
              close={exit}
              verifyTime={verifyTime}
              hookForm={hookForm}
              onOkClick={nextStep}
            />
          ));
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
      <CertificateSkipModal
        onOkClick={() => {
          setValue('schoolInfo.email', '');
          nextStep();
        }}
        onCancelClick={exit}
      />
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
