'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import WriteModal from '../components/WriteModal';
import { WriteFormType } from '../type';
import { usePostCreateCommunityArticle } from '@/apis/community';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import MultiImageUploader from '@/components/Image/MultiImageUploader';
import ListBoxController from '@/components/ListBox/ListBoxController';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';

export default function InputSection() {
  const { open, exit } = useModal();
  const { t } = useTranslation('community');
  const { mutate: mutateArticle } = usePostCreateCommunityArticle();
  const hookForm = useForm<WriteFormType>({
    mode: 'onChange',
    defaultValues: {
      categoryId: 0,
      title: '',
      content: '',
      images: [],
    },
  });

  const { register, handleSubmit, formState, control } = hookForm;

  const onSubmit: SubmitHandler<WriteFormType> = async (formData) => {
    exit();
    mutateArticle({
      title: formData.title,
      content: formData.content,
      categoryId: formData.categoryId,
      images: formData.images,
    });
  };

  const options = [
    { id: 1, name: t('create.category.K-POP') },
    { id: 2, name: t('create.category.Q&A') },
    { id: 3, name: t('create.category.Language') },
  ];

  return (
    <section>
      <div className="px-20 pb-8 pt-20">
        <Spacing size={4} />
        <ListBoxController
          name={t('create.category.name')}
          options={options}
          register={register('categoryId', {
            required: true,
            validate: (value) => value !== 0,
          })}
        />

        <Spacing size={4} />
        <TextFieldController
          placeholder={t('create.title.placeholder')}
          hookForm={hookForm}
          register={register('title', {
            required: true,
            maxLength: 60,
          })}
          maxCount={60}
        />
      </div>

      <div className="px-20 py-8">
        <Spacing size={4} />
        <TextFieldController
          placeholder={t('create.content.placeholder')}
          register={register('content', {
            required: true,
            maxLength: 700,
            validate: (value) => value.length >= 20,
          })}
          hookForm={hookForm}
          as="textarea"
          maxCount={700}
          className={'h-339'}
        />
      </div>

      <MultiImageUploader<WriteFormType> control={control} name={'images'} />

      <Spacing size={60} />
      <ButtonGroup>
        <Button
          onClick={() => {
            handleSubmit(onSubmit);
            open(() => (
              <WriteModal onOkClick={handleSubmit(onSubmit)} onCancelClick={exit} type={'write'} />
            ));
          }}
          disabled={!formState.isValid}
        >
          {t('create.submit.label')}
        </Button>
      </ButtonGroup>
    </section>
  );
}
