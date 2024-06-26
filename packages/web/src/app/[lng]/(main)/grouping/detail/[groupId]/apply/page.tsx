import ApplyHeader from './components/ApplyHeader';
import InputForm from './components/InputForm';

import { serverTranslation } from '@/app/i18n';
import { Spacing } from '@/components/Spacing';

interface GroupingApplyPageProps {
  params: {
    lng: string;
  };
}

export default async function ApplyPage({ params: { lng } }: GroupingApplyPageProps) {
  const { t } = await serverTranslation(lng, 'groupDetail');

  return (
    <main className="px-20">
      <ApplyHeader />
      <Spacing size={32} />
      <h4 className="text-h4 text-sign-cto">{t('apply.description')}</h4>
      <Spacing size={36} />
      <InputForm />
    </main>
  );
}
