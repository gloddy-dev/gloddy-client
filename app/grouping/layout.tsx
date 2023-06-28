'use client';

import BottomNavigation from '@/components/common/BottomNavigation';
import { usePathname } from 'next/navigation';

export default function GroupingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bottomNavPathName = ['/grouping', '/board', '/meeting', '/profile'];
  return (
    <div className="h-full w-full max-w-[26.25rem] overflow-y-scroll bg-white3 px-24">
      <div>
        {children}
        {bottomNavPathName.includes(pathname) && <BottomNavigation />}
      </div>
    </div>
  );
}
