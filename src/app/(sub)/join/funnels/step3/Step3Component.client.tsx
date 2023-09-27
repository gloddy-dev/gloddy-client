'use client';

import EmailForm from './components/EmailForm.client';
import NoticeSection from './components/NoticeSection.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.client';
import { useTranslation } from '@/app/i18n/client';

export default function Step3Component() {
  const { t } = useTranslation('join');
  return (
    <main>
      <JoinTitleTextMessage>{t('enterSchoolEmail')}</JoinTitleTextMessage>

      <EmailForm />

      <NoticeSection />
    </main>
  );
}
