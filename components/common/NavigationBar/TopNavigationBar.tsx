'use client';
import { NavBar } from 'antd-mobile';
import { useRouter } from 'next/navigation';

interface TopNavigationBarProps {
  text: string;
}
export default function TopNavigationBar({ text }: TopNavigationBarProps) {
  const router = useRouter();
  return (
    <NavBar
      style={{
        '--height': '57px',
      }}
      onBack={() => {
        router.back();
      }}
    >
      <div className="font-500">{text}</div>
    </NavBar>
  );
}
