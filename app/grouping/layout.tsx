'use client';

import BottomNavigation from '@/components/common/BottomNavigation';
import { NavBar, SafeArea } from 'antd-mobile';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function GroupingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bottomNavPathName = ['/grouping', '/board', '/meeting', '/profile'];

  const navTitle = <div className="text-16 font-700 flex justify-start">그루핑</div>;
  const searchIcon = (
    <div className="flex justify-end">
      <Image src="/assets/search_navbar.svg" alt="search" width={15} height={15} />
    </div>
  );

  return (
    <div className="h-full w-full bg-white3">
      <div>
        <SafeArea position="top" />
        {pathname === '/grouping' && (
          <NavBar
            left={navTitle}
            right={searchIcon}
            backArrow={false}
            style={{
              '--height': '57px',
            }}
          />
        )}

        <div>{children}</div>

        {bottomNavPathName.includes(pathname) && <BottomNavigation />}
        <SafeArea position="bottom" />
      </div>
    </div>
  );
}
