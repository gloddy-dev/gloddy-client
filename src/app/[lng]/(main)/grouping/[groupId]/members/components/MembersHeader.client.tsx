'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MembersHeader() {
  const router = useRouter();

  return (
    <Header>
      <Header.Left className="px-4">
        <IconButton size="large" onClick={() => router.back()}>
          <Image src="/icons/24/arrow_back.svg" alt="back" width={24} height={24} />
        </IconButton>
        <p>모임 멤버</p>
      </Header.Left>
    </Header>
  );
}
