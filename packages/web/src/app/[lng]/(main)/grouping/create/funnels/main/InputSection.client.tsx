'use client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';

import { useTranslation } from '@/app/i18n/client';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';

export default function InputSection() {
  const { t } = useTranslation('grouping');
  const hookForm = useCreateGroupContext();
  const { register } = hookForm;

  return (
    <section>
      <div className="px-20 pb-8 pt-20">
        <p className="text-subtitle-3 text-sign-secondary px-4">{t('create.title.label')}</p>
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
        <p className="text-subtitle-3 text-sign-secondary px-4">{t('create.content.label')}</p>
        <Spacing size={4} />
        <TextFieldController
          placeholder={t('create.content.placeholder')}
          register={register('content', {
            required: true,
            maxLength: 700,
          })}
          hookForm={hookForm}
          as="textarea"
          maxCount={700}
        />
      </div>
    </section>
  );
}
