'use client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { useRouter } from 'next/navigation';

export default function ApplyHeader() {
  const router = useRouter();

  return (
    <Header className="px-4">
      <Header.Left>
        <Flex align="center">
          <IconButton size="large" onClick={() => router.back()}>
            <Icon id="24-arrow_back" />
          </IconButton>
          <p>모임 지원서 작성</p>
        </Flex>
      </Header.Left>
    </Header>
  );
}
