'use client';

import { TopNavigationBar } from '@/components/common/NavigationBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProfileMatesTopNavigationBar() {
  const router = useRouter();
  return (
    <TopNavigationBar
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
