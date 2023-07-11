import Image from 'next/image';

export default function TopNavigationBar() {
  return (
    <header className="fixed z-10 flex w-full max-w-450 items-center justify-between p-20">
      <Image
        src="/assets/arrow_left_white.svg"
        alt="left"
        width={7.5}
        height={15}
        className="cursor-pointer"
      />
      <Image
        src="/assets/setting.svg"
        alt="setting"
        width={20}
        height={20}
        className="cursor-pointer"
      />
    </header>
  );
}
