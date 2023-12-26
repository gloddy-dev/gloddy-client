'use client';

import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';

export default function WriteHeader() {
  const { t } = useTranslation('community');
  const { back } = useAppRouter();

  return (
    <Header>
      <Header.Left>
        <IconButton size="large" onClick={() => back()}>
          <Icon id="24-arrow_back" />
        </IconButton>
        <p className="w-full truncate">{t('create.headerTitle')}</p>
      </Header.Left>
    </Header>
  );
}
