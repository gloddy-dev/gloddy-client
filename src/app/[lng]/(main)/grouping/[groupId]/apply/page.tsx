import ApplyHeader from './components/ApplyHeader';
import InputForm from './components/InputForm.client';
import { serverTranslation } from '@/app/i18n';
import { PageAnimation } from '@/components/PageAnimation';
import { Spacing } from '@/components/Spacing';

export default async function ApplyPage() {
  const { t } = await serverTranslation('groupDetail');

  return (
    <main className="px-20">
      <ApplyHeader />
      <PageAnimation>
        <Spacing size={32} />
        <h4 className="text-h4 text-sign-cto">{t('apply.description')}</h4>
        <Spacing size={36} />
        <InputForm />
      </PageAnimation>
    </main>
  );
}
