'use client';
import VerifyBottomSheet from './VerifyBottomSheet.client';
import { useEmailMutation } from '@/apis/auth';
import { Button, ButtonGroup } from '@/components/Button';
import { TextFieldController } from '@/components/TextField';
import { regexr } from '@/constants/regexr';
import { useModal } from '@/hooks/useModal';
import { memo } from 'react';
import { useForm } from 'react-hook-form';

import type { VerifyType } from '../type';

const defaultValues = {
  email: '',
  verifyEmailNumber: '',
};

export default memo(function EmailForm() {
  const { open: openVerifyBottomSheet, close: closeVerifyBottomSheet } = useModal();
  const { mutate: mutateEmail } = useEmailMutation();
  const hookForm = useForm({ defaultValues, mode: 'onBlur' });
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = hookForm;

  const onSubmit = (data: VerifyType) => {
    openVerifyBottomSheet(({ isOpen }) => (
      <VerifyBottomSheet onClose={closeVerifyBottomSheet} isOpen={isOpen} hookForm={hookForm} />
    ));

    mutateEmail({ email: data.email });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFieldController
        label="학교 이메일"
        hookForm={hookForm}
        register={register('email', {
          required: true,
          pattern: {
            value: regexr.email,
            message: '* 학교 이메일을 다시 확인해주세요.',
          },
        })}
      />
      <ButtonGroup isSpacing={false}>
        <Button type="submit" disabled={!isValid}>
          확인
        </Button>
      </ButtonGroup>
    </form>
  );
});
