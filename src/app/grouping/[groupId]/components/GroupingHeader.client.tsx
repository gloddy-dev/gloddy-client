'use client';

import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface GroupingHeaderProps {
  title: string;
}

export default function GroupingHeader({ title }: GroupingHeaderProps) {
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
        <IconButton size="large" onClick={() => console.log('더보기')}>
          <Image src="/icons/24/more.svg" alt="more" width={24} height={24} />
        </IconButton>
      }
      className="px-4"
    />
  );
}
