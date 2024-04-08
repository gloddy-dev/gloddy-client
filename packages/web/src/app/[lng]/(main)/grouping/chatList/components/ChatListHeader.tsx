'use client';

import { useTranslation } from 'react-i18next';

import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';

export default function ChatListHeader() {
  const { back } = useAppRouter();
  const { t } = useTranslation('grouping');

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => back()}>
          <Icon id="24-arrow_back" />
        </IconButton>
        <p>{t('chat.listHeader')}</p>
      </Header.Left>
    </Header>
  );
}
