'use client';

import { Header } from '@/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProfileMatesHeader() {
  const router = useRouter();
  return (
    <Header
      text="모임 후기"
      leftNode={
        <Image
          alt="back"
          src="/assets/arrow_back.svg"
          width={10}
          height={10}
          onClick={() => router.back()}
        />
      }
    />
  );
}
