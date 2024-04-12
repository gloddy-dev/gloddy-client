'use client';

import { useTranslation } from '@/app/i18n/client';
import CommentsIcon from '@/assets/svgs/24-comments.svg';
import NotifiIcon from '@/assets/svgs/24-notification.svg';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { NavLink } from '@/components/NavLink';

export default function GroupingHeader() {
  const { t } = useTranslation('grouping');

  return (
    <Header>
      <Header.Left className="pl-20">{t('headerTitle')}</Header.Left>
      <Header.Right className="text-primary pr-4">
        {/* <NavLink href="/notification">
          <IconButton size="large">
            <Icon id="24-notification" />
          </IconButton>
        </NavLink>
        <NavLink href="/grouping/chatList">
          <IconButton size="large">
            <Icon id="24-send" className="-rotate-45" />
          </IconButton>
        </NavLink> */}

        <IconButton
          size="large"
          onClick={() => window.open('https://forms.gle/YJvNzLniP8he4xv68', '_blank')}
        >
          <CommentsIcon />
        </IconButton>
        <NavLink href="/notification">
          <IconButton size="large">
            <NotifiIcon />
          </IconButton>
        </NavLink>
      </Header.Right>
    </Header>
  );
}
