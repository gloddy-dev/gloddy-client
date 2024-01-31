'use client';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';

export default function ManageHeader() {
  const { t } = useTranslation('groupDetail');
  const { back } = useAppRouter();

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={back}>
          <Icon id="24-close" />
        </IconButton>
        <p>{t('manage.headerTitle')}</p>
      </Header.Left>
    </Header>
  );
}
