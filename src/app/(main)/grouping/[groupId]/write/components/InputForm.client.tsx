'use client';

import ImageSection from './ImageSection.client';
import WriteModal from './WriteModal';
import { usePostFiles } from '@/apis/common';
import { usePostArticle } from '@/apis/groups';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/common/Checkbox';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { TextFieldController } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useForm } from 'react-hook-form';

import type { WriteFormValues } from '../type';

export default function InputForm() {
  const { open, close } = useModal();
  const { groupId } = useNumberParams<['groupId']>();
  const hookForm = useForm<WriteFormValues>({
    defaultValues: {
      content: '',
      notice: false,
      images: [],
    },
  });
  const { register, handleSubmit, watch, setValue, control } = hookForm;

  const { mutateAsync: mutateFilesAsync } = usePostFiles();
  const { mutate: mutateArticle } = usePostArticle(groupId);

  const onSubmit = async (data: WriteFormValues) => {
    const { fileUrlList } = await mutateFilesAsync({
      fileList: data.images,
    });

    mutateArticle({
      groupId,
      article: {
        ...data,
        images: fileUrlList,
      },
    });
  };

  return (
    <div className="px-20">
      <ImageSection control={control} />
      <Spacing size={8} />
      <TextFieldController
        as="textarea"
        hookForm={hookForm}
        register={register('content', { required: true })}
        placeholder="최소 20글자 이상의 게시글을 작성해보세요."
        maxCount={300}
      />
      <Spacing size={8} />
      <ButtonGroup>
        <Button
          onClick={() =>
            open(
              <WriteModal type="write" onCancelClick={close} onOkClick={handleSubmit(onSubmit)} />
            )
          }
          disabled={watch('content').length < 20 || watch('images').length === 0}
        >
          글쓰기
        </Button>
      </ButtonGroup>
      <Flex className="gap-8">
        <CircleCheckbox
          onClick={() => setValue('notice', !watch('notice'))}
          checked={watch('notice')}
        />
        <p className="py-12 text-subtitle-2">위 게시글을 공지로 설정합니다.</p>
      </Flex>
      <Spacing size={16} />
    </div>
  );
}
