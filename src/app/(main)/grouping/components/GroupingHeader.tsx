import { serverTranslation } from '@/app/i18n';
import { Header } from '@/components/Header';

export default async function GroupingHeader() {
  const { t } = await serverTranslation('grouping');
  return (
    <Header className="px-20">
      <Header.Left>{t('headerTitle')}</Header.Left>
    </Header>
  );
}
