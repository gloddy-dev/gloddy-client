'use client';

import ApplyModal from './ApplyModal.client';
import { usePostApply } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { LayerLoading } from '@/components/Loading';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';
import { SubmitHandler, useForm } from 'react-hook-form';

type ApplyFormType = {
  introduce: string;
  reason: string;
};

export default function InputForm() {
  const { t } = useTranslation('groupDetail');
  const hookForm = useForm({
    mode: 'onChange',
    defaultValues: {
      introduce: '',
      reason: '',
    },
  });
  const { open, exit } = useModal();
  const { groupId } = useNumberParams<['groupId']>();
  const { mutate: mutatePostApply, status } = usePostApply(groupId);

  const { register, handleSubmit, formState } = hookForm;

  const onSubmit: SubmitHandler<ApplyFormType> = (apply) => {
    mutatePostApply({
      params: { groupId },
      apply,
    });
  };

  return (
    <>
      <Spacing size={8} />
      <p className="pl-4 text-subtitle-3 text-sign-secondary">{t('apply.introduce')}</p>
      <Spacing size={4} />
      <TextFieldController
        as="textarea"
        hookForm={hookForm}
        register={register('introduce', { required: true })}
        placeholder={t('apply.placeholder')}
        maxCount={150}
      />
      <Spacing size={18} />
      <p className="pl-4 text-subtitle-3 text-sign-secondary">{t('apply.reason')}</p>
      <Spacing size={4} />
      <TextFieldController
        as="textarea"
        hookForm={hookForm}
        register={register('reason', { required: true })}
        placeholder={t('apply.placeholder')}
        maxCount={150}
      />
      <ButtonGroup>
        <Button
          onClick={() =>
            open(() => <ApplyModal onOkClick={handleSubmit(onSubmit)} onCancelClick={exit} />)
          }
          disabled={!formState.isValid}
        >
          {t('apply.submit.label')}
        </Button>
        <LayerLoading isLoading={status === 'loading' || status === 'success'} />
      </ButtonGroup>
    </>
  );
}
