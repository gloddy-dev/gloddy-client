'use client';

import { NavBar, SafeArea } from 'antd-mobile';

export default function GroupingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-white">
      <div className="w-full">
        <SafeArea position="top" />

        <NavBar
          style={{
            '--height': '57px',
          }}
        >
          <div className="font-500">모임 개설하기</div>
        </NavBar>
        <div className="px-24 w-full">{children}</div>
        <SafeArea position="bottom" />
      </div>
    </div>
  );
}
