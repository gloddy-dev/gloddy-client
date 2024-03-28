import EmailForm from './components/EmailForm';
import NoticeSection from './components/NoticeSection';
import TitleTextMessage from './components/TitleTextMessage';
import VerifyHeader from './components/VerifyHeader';

import { serverTranslation } from '@/app/i18n';

interface PageProps {
  params: {
    lng: string;
  };
}

export default async function Page({ params: { lng } }: PageProps) {
  const { t } = await serverTranslation(lng, 'join');

  return (
    <main className="px-20">
      <VerifyHeader />
      <TitleTextMessage>{t('enterSchoolEmail')}</TitleTextMessage>

      <EmailForm />

      <NoticeSection />
    </main>
  );
}
