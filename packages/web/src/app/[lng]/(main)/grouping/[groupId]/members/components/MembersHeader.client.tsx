'use client';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';

export default function MembersHeader() {
  const { back } = useAppRouter();
  const { t } = useTranslation('groupDetail');

  return (
    <Header>
      <Header.Left className="px-4">
        <IconButton size="large" onClick={back}>
          <Icon id="24-arrow_back" />
        </IconButton>
        <p>{t('members.headerTitle')}</p>
      </Header.Left>
    </Header>
  );
}
