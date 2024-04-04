'use client';

import EmailForm from './components/EmailForm';
import NoticeSection from './components/NoticeSection';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage';

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
