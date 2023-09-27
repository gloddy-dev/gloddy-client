'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import Link from 'next/link';

export default function ProfileHeader() {
  return (
    <Header>
      <Header.Right>
        <Link href="/profile/setting">
          <IconButton size="large">
            <Icon id="24-settings" />
          </IconButton>
        </Link>
      </Header.Right>
    </Header>
  );
}
