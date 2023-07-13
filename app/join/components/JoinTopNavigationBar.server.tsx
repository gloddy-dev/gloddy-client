'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { TopNavigationBar } from '@/components/common/NavigationBar';

export default function JoinTopNavigationBar() {
  const router = useRouter();
  return (
    <TopNavigationBar
      text="회원가입"
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
    />
  );
}
