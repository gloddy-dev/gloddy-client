'use client';

import { Header } from '@/components/NavigationBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProfilePraiseHeader() {
  const router = useRouter();
  return (
    <Header
      text="받은 칭찬"
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
