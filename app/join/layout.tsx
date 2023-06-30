'use client';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import Image from 'next/image';

export default function GroupingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-20">
      <TopNavigationBar
        text="회원가입"
        right={<Image alt="" src="/assets/alert.svg" width={20} height={30} />}
      />
      <div className="h-30" />
      {children}
    </div>
  );
}
