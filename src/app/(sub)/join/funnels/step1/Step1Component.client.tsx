'use client';

import FormSection from './components/FormSection.client';
import NoticeSection from './components/NoticeSection.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.client';
import { useTranslation } from '@/app/i18n/client';
import { Spacing } from '@/components/Spacing';

export default function Step1Component() {
  const { t } = useTranslation('join');
  return (
    <main>
      <JoinTitleTextMessage>{t('enterPhoneNumber')}</JoinTitleTextMessage>
      <FormSection />
      <Spacing size={16} />
      <NoticeSection />
    </main>
  );
}
