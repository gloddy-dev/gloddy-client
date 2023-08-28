'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ManageHeader() {
  const router = useRouter();

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={() => router.back()}>
          <Image src="/icons/24/arrow_back.svg" alt="back" width={24} height={24} />
        </IconButton>
        <p>모임 지원서 관리</p>
      </Header.Left>
    </Header>
  );
}
