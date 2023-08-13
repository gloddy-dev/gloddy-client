'use client';

import { Header } from '@/components/NavigationBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BoardHeader() {
  const router = useRouter();

  return (
    <Header
      leftNode={
        <Image
          alt="back"
          src="/assets/arrow_back.svg"
          width={8}
          height={30}
          onClick={() => router.back()}
          className="cursor-pointer"
        />
      }
      text="게시판"
    />
  );
}
