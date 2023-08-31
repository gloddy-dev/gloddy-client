'use client';

import ApplyModal from './ApplyModal.client';
import { usePostApply } from '@/apis/groups';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { TextFieldController } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import { SubmitHandler, useForm } from 'react-hook-form';

type ApplyFormType = {
  introduce: string;
  reason: string;
};

export default function InputForm() {
  const hookForm = useForm({
    mode: 'onChange',
    defaultValues: {
      introduce: '',
      reason: '',
    },
  });
  const { open, close } = useModal();
  const { groupId } = useNumberParams<['groupId']>();
  const { mutate: mutatePostApply, isLoading } = usePostApply(groupId);

  const { register, handleSubmit, formState } = hookForm;

  const onSubmit: SubmitHandler<ApplyFormType> = (apply) => {
    if (isLoading) return;

    mutatePostApply({
      apply,
      groupId,
    });
  };

  return (
    <>
      <Spacing size={8} />
      <p className="pl-4 text-subtitle-3 text-sign-secondary">나는 이런 사람이에요!</p>
      <Spacing size={4} />
      <TextFieldController
        as="textarea"
        hookForm={hookForm}
        register={register('introduce', { required: true })}
        placeholder="내용을 입력해주세요."
        maxCount={150}
      />
      <Spacing size={18} />
      <p className="pl-4 text-subtitle-3 text-sign-secondary">모임에 함께 하고 싶은 이유</p>
      <Spacing size={4} />
      <TextFieldController
        as="textarea"
        hookForm={hookForm}
        register={register('reason', { required: true })}
        placeholder="내용을 입력해주세요."
        maxCount={150}
      />
      <ButtonGroup>
        <Button
          onClick={() =>
            open(<ApplyModal onOkClick={handleSubmit(onSubmit)} onCancelClick={close} />)
          }
          disabled={!formState.isValid}
        >
          지원하기
        </Button>
      </ButtonGroup>
    </>
  );
}
