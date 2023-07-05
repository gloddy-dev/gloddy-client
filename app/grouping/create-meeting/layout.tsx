'use client';

import { SafeArea } from 'antd-mobile';

import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';

export default function GroupingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen  bg-white ">
      <SafeArea position="top" />
      <div className="h-full w-full">
        <div className="px-20 pt-20">
          <TopNavigationBar isLeft={true} text="모임 개설" />
        </div>

        <div className="">{children}</div>
      </div>
      <SafeArea position="bottom" />
    </div>
  );
}
