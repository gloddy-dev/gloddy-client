'use client';
import { useWriteContext } from '../WriteContext';
import { BottomFixedButton } from '@/components/common/Button';
import { CircleCheckbox } from '@/components/common/Checkbox';
import { TextArea } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

type WriteFormType = {
  content: string;
  isNotice: boolean;
};

export default function InputForm() {
  const { images } = useWriteContext();

  const { register, handleSubmit, formState, setValue, watch } = useForm({
    mode: 'onChange',
    defaultValues: {
      content: '',
      isNotice: false,
    },
  });

  const onSubmit = (data: WriteFormType) => {
    console.log({
      ...data,
      images,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex h-[calc(100%-160px)] flex-col text-14">
      <TextArea
        placeholder="내용을 입력해주세요."
        className="flex-grow"
        {...register('content', { required: true })}
      />
      {images.length > 0 && <Spacing size={15} />}
      <div className="flex gap-14">
        {images.map(({ imageBlob }) => (
          <div key={imageBlob} className="relative grow before:block before:pb-[100%]">
            <Image src={imageBlob} alt="select-img" className="rounded-10 object-cover" fill />
          </div>
        ))}
      </div>
      <Spacing size={20} />
      <CircleCheckbox
        text="위 글을 공지로 설정합니다."
        onClick={() => setValue('isNotice', !watch('isNotice'))}
        checked={watch('isNotice')}
        {...register('isNotice')}
      />
      <BottomFixedButton
        type="submit"
        text="글쓰기"
        disabled={!formState.isValid || !formState.isDirty}
      />
    </form>
  );
}
