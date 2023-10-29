'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { NavLink } from '@/components/NavLink';

export default function ProfileHeader() {
  return (
    <Header>
      <Header.Right>
        <NavLink href="/profile/setting">
          <IconButton size="large">
            <Icon id="24-settings" />
          </IconButton>
        </NavLink>
      </Header.Right>
    </Header>
  );
}
