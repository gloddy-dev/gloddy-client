'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileHeader() {
  return (
    <Header>
      <Header.Right>
        <Link href="/profile/setting">
          <IconButton size="large">
            <Image src="/icons/24/settings.svg" width={24} height={24} alt="action" />
          </IconButton>
        </Link>
      </Header.Right>
    </Header>
  );
}
