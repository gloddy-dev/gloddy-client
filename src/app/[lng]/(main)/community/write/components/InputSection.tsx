'use client';
import { SubmitHandler, useForm } from 'react-hook-form';

import ImageSection from '@/app/[lng]/(main)/community/write/components/ImageSection';
import WriteModal from '@/app/[lng]/(main)/community/write/components/WriteModal';
import { WriteFormType } from '@/app/[lng]/(main)/community/write/type';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import ListBoxController from '@/components/ListBox/ListBoxController';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';

export default function InputSection() {
  const { open, exit } = useModal();
  const { t } = useTranslation('community');
  const hookForm = useForm<WriteFormType>({
    mode: 'onChange',
    defaultValues: {
      category: 'NONE',
      title: '',
      content: '',
      images: [],
    },
  });

  const { register, handleSubmit, formState, control } = hookForm;

  const onSubmit: SubmitHandler<WriteFormType> = (formData) => {
    console.log(formData);
  };

  const options = [t('create.category.kpop'), t('create.category.qna'), t('create.category.lang')];

  return (
    <section>
      <div className="px-20 pb-8 pt-20">
        <Spacing size={4} />
        <ListBoxController
          name={t('create.category.name')}
          options={options}
          register={register('category', {
            required: true,
            validate: (value) => value !== 'NONE',
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
            maxLength: 300,
          })}
          hookForm={hookForm}
          as="textarea"
          maxCount={300}
          className={'h-339'}
        />
      </div>

      <ImageSection control={control} />

      <Spacing size={60} />
      <ButtonGroup>
        <Button
          onClick={() => {
            handleSubmit(onSubmit);
            open(() => <WriteModal onOkClick={handleSubmit(onSubmit)} onCancelClick={exit} />);
          }}
          disabled={!formState.isValid}
        >
          {t('create.submit.label')}
        </Button>
      </ButtonGroup>
    </section>
  );
}
