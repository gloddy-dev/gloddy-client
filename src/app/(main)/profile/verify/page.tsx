import EmailForm from './components/EmailForm.client';
import NoticeSection from './components/NoticeSection.client';
import TitleTextMessage from './components/TitleTextMessage';
import VerifyHeader from './components/VerifyHeader.client';
import { serverTranslation } from '@/app/i18n';

export default async function Page() {
  const { t } = await serverTranslation('grouping');

  return (
    <main className="px-20">
      <VerifyHeader />
      <TitleTextMessage>{t('enterSchoolEmail')}</TitleTextMessage>

      <EmailForm />

      <NoticeSection />
    </main>
  );
}
