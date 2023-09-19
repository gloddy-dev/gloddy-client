'use client';
import CertificateSkipModal from './CertificateSkipModal.client';
import VerifyBottomSheet from './VerifyBottomSheet.client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useEmailMutation } from '@/apis/auth';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { useModal } from '@/hooks/useModal';
import { memo } from 'react';

import type { SignUpState } from '../../../type';

export default memo(function EmailForm() {
  const { t } = useTranslation('join');

  const { nextStep } = useFunnelContext();

  const { open: openSkipModal, exit: exitSkipModal } = useModal();
  const { open: openVerifyBottomSheet, close: closeVerifyBottomSheet } = useModal();
  const { mutate: mutateEmail } = useEmailMutation();
  const hookForm = useJoinContext();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = hookForm;

  const onSubmit = (data: Pick<SignUpState, 'schoolInfo'>) => {
    if (!data.schoolInfo.email) return;

    mutateEmail(
      { email: data.schoolInfo.email },
      {
        onSuccess: () => {
          openVerifyBottomSheet(({ isOpen }) => (
            <VerifyBottomSheet
              onClose={closeVerifyBottomSheet}
              onOkClick={nextStep}
              isOpen={isOpen}
            />
          ));
        },
      }
    );
  };

  const handleSkipClick = () => {
    openSkipModal(() => (
      <CertificateSkipModal
        onOkClick={() => {
          setValue('schoolInfo.email', '');
          nextStep();
        }}
        onCancelClick={exitSkipModal}
      />
    ));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFieldController
        label={t('schoolEmail')}
        hookForm={hookForm}
        register={register('schoolInfo.email', {
          required: true,
          pattern: {
            value: regexr.email,
            message: t('* 학교 이메일을 다시 확인해주세요.'),
          },
        })}
        type="email"
        placeholder="gloddykorea@khu.ac.kr"
      />
      <ButtonGroup isSpacing={false}>
        <Button type="button" onClick={handleSkipClick}>
          {t('건너뛰기')}
        </Button>
        <Button type="submit" disabled={!isValid}>
          {t('complete')}
        </Button>
      </ButtonGroup>
    </form>
  );
});
