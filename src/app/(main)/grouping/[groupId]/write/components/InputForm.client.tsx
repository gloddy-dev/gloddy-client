'use client';

import ImageSection from './ImageSection.client';
import WriteModal from './WriteModal';
import { useGetGroupDetail, usePostArticle } from '@/apis/groups';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/Checkbox';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useForm } from 'react-hook-form';

import type { WriteFormValues } from '../type';

export default function InputForm() {
  const { open, exit } = useModal();
  const { groupId } = useNumberParams<['groupId']>();
  const hookForm = useForm<WriteFormValues>({
    defaultValues: {
      content: '',
      notice: false,
      images: [],
    },
  });
  const { register, handleSubmit, watch, setValue, control, formState } = hookForm;

  const { mutate: mutateArticle, isLoading } = usePostArticle(groupId);
  const { data: groupDetailData } = useGetGroupDetail(groupId);

  const { isCaptain } = groupDetailData;

  const onSubmit = async (data: WriteFormValues) => {
    mutateArticle(
      {
        params: { groupId },
        article: data,
      },
      {
        onSettled: exit,
      }
    );
  };
  console.log(isLoading, formState.isSubmitting);

  return (
    <>
      <ImageSection control={control} />
      <section className="h-full px-20 py-8">
        <TextFieldController
          as="textarea"
          hookForm={hookForm}
          register={register('content', { required: true, maxLength: 300 })}
          placeholder="최소 20글자 이상의 게시글을 작성해보세요."
          maxCount={300}
          className="h-full"
        />
      </section>
      {isCaptain && (
        <Flex className="gap-8 px-20 py-12" onClick={() => setValue('notice', !watch('notice'))}>
          <CircleCheckbox checked={watch('notice')} />
          <p className="text-subtitle-2">위 게시글을 공지로 설정합니다.</p>
        </Flex>
      )}
      <Spacing size={16} />
      <ButtonGroup>
        <Button
          onClick={() =>
            open(() => (
              <WriteModal
                type="write"
                onCancelClick={exit}
                onOkClick={handleSubmit(onSubmit)}
                isLoading={isLoading}
              />
            ))
          }
          disabled={watch('content').length < 20}
        >
          글쓰기
        </Button>
      </ButtonGroup>
    </>
  );
}
