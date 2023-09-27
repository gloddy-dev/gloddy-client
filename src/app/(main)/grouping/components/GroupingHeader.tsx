import { serverTranslation } from '@/app/i18n';
import { Header } from '@/components/Header';

interface GroupingHeaderProps {
  lng: string;
}

export default async function GroupingHeader({ lng }: GroupingHeaderProps) {
  const { t } = await serverTranslation(lng, 'grouping');
  return (
    <Header className="px-20">
      <Header.Left>{t('headerTitle')}</Header.Left>
    </Header>
  );
}
