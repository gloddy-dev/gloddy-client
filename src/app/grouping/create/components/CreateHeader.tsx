'use client';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CreateHeader() {
  const router = useRouter();
  return (
    <Header
      leftNode={
        <Image
          alt="back"
          src="/assets/arrow_back.svg"
          width={8}
          height={30}
          onClick={() => {
            router.back();
          }}
        />
      }
      text="모임 개설하기"
    />
  );
}
