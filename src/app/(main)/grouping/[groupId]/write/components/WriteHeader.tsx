'use client';

import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Flex } from '@/components/Layout';
import Image from 'next/image';

export default function WriteHeader() {
  return (
    <Header className="px-4">
      <Header.Left>
        <Flex align="center">
          <IconButton size="large">
            <Image src="/icons/24/arrow_back.svg" alt="arrow_back" width={24} height={24} />
          </IconButton>
          <p className="text-subtitle-1">게시글 작성</p>
        </Flex>
      </Header.Left>
    </Header>
  );
}
