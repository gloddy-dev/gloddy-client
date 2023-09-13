'use client';

import ImageSection from './ImageSection.client';
import WriteModal from './WriteModal';
import { useGetGroupDetail, usePostArticle } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/Checkbox';
import { Flex } from '@/components/Layout';
import LayerLoading from '@/components/Loading/LayerLoading.client';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import { useForm } from 'react-hook-form';

import type { WriteFormValues } from '../type';

export default function InputForm() {
  const { t } = useTranslation('groupDetail');
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

  const { mutate: mutateArticle, status } = usePostArticle(groupId);
  const { data: groupDetailData } = useGetGroupDetail(groupId);

  const { isCaptain } = groupDetailData;

  const onSubmit = async (data: WriteFormValues) => {
    exit();
    mutateArticle({
      params: { groupId },
      article: data,
    });
  };

  return (
    <>
      <ImageSection control={control} />
      <section className="h-full px-20 py-8">
        <TextFieldController
          as="textarea"
          hookForm={hookForm}
          register={register('content', { required: true, minLength: 20, maxLength: 300 })}
          placeholder={t('writeArticle.content.placeholder')}
          maxCount={300}
          className="h-full"
        />
      </section>
      {isCaptain && (
        <Flex className="gap-8 px-20 py-12" onClick={() => setValue('notice', !watch('notice'))}>
          <CircleCheckbox checked={watch('notice')} />
          <p className="text-subtitle-2">{t('writeArticle.notice')}</p>
        </Flex>
      )}
      <Spacing size={16} />
      <ButtonGroup>
        <Button
          onClick={() =>
            open(() => (
              <WriteModal type="write" onCancelClick={exit} onOkClick={handleSubmit(onSubmit)} />
            ))
          }
          disabled={!formState.isValid}
        >
          {t('writeArticle.submit.label')}
        </Button>
      </ButtonGroup>
      <LayerLoading isLoading={status === 'loading' || status === 'success'} />
    </>
  );
}
