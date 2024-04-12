'use client';
import SettingIcon from '@/assets/svgs/24-settings.svg';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { NavLink } from '@/components/NavLink';

export default function ProfileHeader() {
  return (
    <Header>
      <Header.Right>
        <NavLink href="/profile/setting">
          <IconButton size="large">
            <SettingIcon />
          </IconButton>
        </NavLink>
      </Header.Right>
    </Header>
  );
}
