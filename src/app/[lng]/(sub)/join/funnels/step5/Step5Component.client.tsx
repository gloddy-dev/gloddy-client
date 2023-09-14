'use client';

import InputForm from './components/InputForm.client';
import JoinContentTextMessage from '../../components/JoinContentTextMessage.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.client';
import { useTranslation } from '@/app/i18n/client';
import { Spacing } from '@/components/Spacing';

export default function Step5Component() {
  const { t } = useTranslation('profile');

  return (
    <main>
      <JoinTitleTextMessage>
        {t('settings.a')}
        <br />
        {t('settings.b')}
      </JoinTitleTextMessage>
      <JoinContentTextMessage>{t('settings.pickThree')}</JoinContentTextMessage>
      <Spacing size={16} />
      <InputForm />
    </main>
  );
}
