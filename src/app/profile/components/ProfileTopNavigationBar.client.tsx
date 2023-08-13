'use client';
import { Header } from '@/components/NavigationBar';
import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <Header
      isSpacing={false}
      rightNode={<Image src="/assets/setting_black.svg" width={24} height={24} alt="setting" />}
    />
  );
}
