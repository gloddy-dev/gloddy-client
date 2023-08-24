'use client';

import ImageSection from './ImageSection';
import { useWriteContext } from '../WriteContext';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/common/Checkbox';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { TextFieldController } from '@/components/TextField';
import { useForm } from 'react-hook-form';

type WriteFormType = {
  content: string;
  isNotice: boolean;
};

export default function InputForm() {
  const { images } = useWriteContext();

  const hookform = useForm({
    mode: 'onChange',
    defaultValues: {
      content: '',
      isNotice: false,
    },
  });

  const { register, handleSubmit, watch, setValue, formState } = hookform;

  const onSubmit = (data: WriteFormType) => {
    console.log({
      ...data,
      images,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-20">
      <ImageSection />
      <Spacing size={8} />
      <TextFieldController
        as="textarea"
        hookForm={hookform}
        register={register('content', { required: true })}
        placeholder="최소 20글자 이상의 게시글을 작성해보세요."
        maxCount={300}
      />
      <Spacing size={8} />
      <ButtonGroup>
        <Button disabled={!formState.isValid || !formState.isDirty}>글쓰기</Button>
      </ButtonGroup>
      <Flex className="gap-8">
        <CircleCheckbox
          onClick={() => setValue('isNotice', !watch('isNotice'))}
          checked={watch('isNotice')}
        />
        <p className="py-12 text-subtitle-2">위 게시글을 공지로 설정합니다.</p>
      </Flex>
      <Spacing size={16} />
    </form>
  );
}
