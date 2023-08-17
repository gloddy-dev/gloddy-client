'use client';

import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Flex } from '@/components/Layout';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface GroupingHeaderProps {
  title: string;
  isCaptain: boolean;
}

export default function GroupingHeader({ title, isCaptain }: GroupingHeaderProps) {
  const router = useRouter();

  return (
    <Header
      leftNode={
        <IconButton size="large" onClick={() => router.back()}>
          <Image src="/icons/24/arrow_back.svg" alt="back" width={24} height={24} />
        </IconButton>
      }
      text={title}
      rightNode={
        <Flex align="center">
          {isCaptain && (
            <IconButton size="large" onClick={() => console.log('수정')}>
              <Image src="/icons/24/application.svg" alt="application" width={24} height={24} />
            </IconButton>
          )}
          <IconButton size="large" onClick={() => console.log('더보기')}>
            <Image src="/icons/24/more.svg" alt="more" width={24} height={24} />
          </IconButton>
        </Flex>
      }
      className="px-4"
    />
  );
}
