'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function GroupingTopNavigationBar() {
  const router = useRouter();

  return (
    <header className="fixed z-10 flex h-60 w-full max-w-450 items-center justify-between px-20">
      <Image
        src="/assets/arrow_left_white.svg"
        alt="left"
        width={7.5}
        height={15}
        onClick={() => router.back()}
        className="cursor-pointer"
      />
      <Image
        src="/assets/setting_white.svg"
        alt="setting"
        width={20}
        height={20}
        onClick={() => router.push('/setting')}
        className="cursor-pointer"
      />
    </header>
  );
}
