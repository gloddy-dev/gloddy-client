import EmailForm from './components/EmailForm.client';
import NoticeSection from './components/NoticeSection.client';
import TitleTextMessage from './components/TitleTextMessage';
import VerifyHeader from './components/VerifyHeader.client';
import { useTranslation } from '@/app/i18n/client';

export default function Step3Component() {
  const { t } = useTranslation('join');
  return (
    <main className="px-20">
      <VerifyHeader />
      <TitleTextMessage>{t('enterSchoolEmail')}</TitleTextMessage>

      <EmailForm />

      <NoticeSection />
    </main>
  );
}
