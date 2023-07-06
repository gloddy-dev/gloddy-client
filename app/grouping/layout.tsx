'use client';

import { NavBar } from 'antd-mobile';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import BottomNavigation from '@/components/common/NavigationBar/BottomNavigation';

export default function GroupingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bottomNavPathName = ['/grouping', '/board', '/meeting', '/profile'];

  const navTitle = <div className="flex justify-start text-16 font-700">그루핑</div>;
  const searchIcon = (
    <div className="flex justify-end">
      <Image src="/assets/search_navbar.svg" alt="search" width={15} height={15} />
    </div>
  );

  return (
    <div className="h-full">
      <div>
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
        {children}
        {bottomNavPathName.includes(pathname) && <BottomNavigation />}
      </div>
    </div>
  );
}
