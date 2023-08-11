'use client';

import { TopNavigationBar } from '@/components/common/NavigationBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BoardTopNavigationBar() {
  const router = useRouter();

  return (
    <TopNavigationBar
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
