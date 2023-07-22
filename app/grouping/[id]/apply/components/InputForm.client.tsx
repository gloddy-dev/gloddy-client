'use client';

import { BottomFixedButton } from '@/components/common/Button';
import { TextArea } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { useForm } from 'react-hook-form';

type ApplyFormType = {
  introduction: string;
  reason: string;
};

export default function InputForm() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      introduction: '',
      reason: '',
    },
  });

  const onSubmit = (data: ApplyFormType) => {
    console.log(data);
  };

  return (
    <form className="text-14" onSubmit={handleSubmit(onSubmit)}>
      <p>나는 이런 사람이에요!</p>
      <Spacing size={10} />
      <TextArea
        placeholder="제목을 입력해주세요."
        className="h-135 text-14"
        {...register('introduction', { required: true })}
      />
      <Spacing size={25} />
      <p>모임에 함께 하고 싶은 이유</p>
      <Spacing size={10} />
      <TextArea
        placeholder="제목을 입력해주세요."
        className="h-135 text-14"
        {...register('reason', { required: true })}
      />
      <BottomFixedButton
        text="지원하기"
        type="submit"
        disabled={!formState.isValid || !formState.isDirty}
      />
    </form>
  );
}
