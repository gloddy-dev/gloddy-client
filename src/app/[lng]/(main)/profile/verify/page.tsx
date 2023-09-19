import EmailForm from './components/EmailForm.client';
import NoticeSection from './components/NoticeSection.client';
import TitleTextMessage from './components/TitleTextMessage';
import VerifyHeader from './components/VerifyHeader.client';
import { serverTranslation } from '@/app/i18n';

interface PageProps {
  params: {
    lng: string;
  };
}

export default async function Page({ params: { lng } }: PageProps) {
  const { t } = await serverTranslation(lng, 'grouping');

  return (
    <main className="px-20">
      <VerifyHeader />
      <TitleTextMessage>{t('enterSchoolEmail')}</TitleTextMessage>

      <EmailForm />

      <NoticeSection />
    </main>
  );
}
