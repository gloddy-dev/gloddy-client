'use client';
import { NavBar } from 'antd-mobile';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface TopNavigationBarProps {
  text: string;
  right: React.ReactNode;
}
export default function TopNavigationBar({ text, right }: TopNavigationBarProps) {
  const router = useRouter();
  return (
    <div className="flex justify-between p-20">
      <Image
        alt="back"
        src="/assets/arrow_back.svg"
        width={8}
        height={30}
        onClick={() => {
          router.back();
        }}
      />
      <div className="font-500">{text}</div>
      <div>{right}</div>
    </div>
  );
}
