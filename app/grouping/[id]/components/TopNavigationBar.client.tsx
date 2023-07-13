'use client';
import Image from 'next/image';

export default function TopNavigationBar() {
  const handleLeftClick = () => {};

  const handleSettingClick = () => {};

  return (
    <header className="fixed z-10 flex h-60 w-full max-w-450 items-center justify-between px-20">
      <Image
        src="/assets/arrow_left_white.svg"
        alt="left"
        width={7.5}
        height={15}
        onClick={handleLeftClick}
        className="cursor-pointer"
      />
      <Image
        src="/assets/setting.svg"
        alt="setting"
        width={20}
        height={20}
        onClick={handleSettingClick}
        className="cursor-pointer"
      />
    </header>
  );
}
