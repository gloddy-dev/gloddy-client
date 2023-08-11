'use client';

import { TopNavigationBar } from '@/components/common/NavigationBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProfilePraiseTopNavigationBar() {
  const router = useRouter();
  return (
    <TopNavigationBar
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
