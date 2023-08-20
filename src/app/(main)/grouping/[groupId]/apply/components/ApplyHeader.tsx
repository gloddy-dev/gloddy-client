'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Flex } from '@/components/Layout';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ApplyHeader() {
  const router = useRouter();

  return (
    <Header className="px-4">
      <Header.Left>
        <Flex align="center">
          <IconButton size="large" onClick={() => router.back()}>
            <Image alt="back" src="/icons/24/arrow_back.svg" width={24} height={24} />
          </IconButton>
          <p>모임 지원서 작성</p>
        </Flex>
      </Header.Left>
    </Header>
  );
}
