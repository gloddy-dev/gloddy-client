'use client';

import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { NavLink } from '@/components/NavLink';

export default function GroupingHeader() {
  const { t } = useTranslation('grouping');

  return (
    <Header>
      <Header.Left className="pl-20">{t('headerTitle')}</Header.Left>
      <Header.Right className="pr-4">
        <NavLink href="/notification">
          <IconButton size="large">
            <Icon id="24-notification" className={'text-sign-secondary'} />
          </IconButton>
        </NavLink>
        <IconButton size="large">
          <Icon id="24-send" className={'text-sign-secondary -rotate-45'} />
        </IconButton>
      </Header.Right>
    </Header>
  );
}
