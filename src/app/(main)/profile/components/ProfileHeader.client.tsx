'use client';
import { Header } from '@/components/Header';
import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <Header>
      <Header.Right>
        <Image src="/icons/48/action_button.svg" width={48} height={48} alt="action" />
      </Header.Right>
    </Header>
  );
}
