'use client';

import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Modal } from '@/components/Modal';
import { TextFieldController } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

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
  const { register, handleSubmit, formState } = hookForm;
  const { open } = useModal();

  const onSubmit = (data: ApplyFormType) => {
    console.log(data);
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
            open(({ exit }) => (
              <Modal onOkClick={handleSubmit(onSubmit)} onCancelClick={exit} variant="success">
                <Spacing size={32} />
                <Image src="/icons/48/check.svg" alt="check" width={48} height={48} />
                <Spacing size={12} />
                <p>지원서를 제출하시겠습니까?</p>
                <Spacing size={4} />
                <p className="text-paragraph-1 text-sign-tertiary">
                  지원서를 제출하면
                  <br />
                  다시 수정할 수 없어요.
                </p>
                <Spacing size={16} />
              </Modal>
            ))
          }
          disabled={!formState.isValid}
        >
          지원하기
        </Button>
      </ButtonGroup>
    </>
  );
}
