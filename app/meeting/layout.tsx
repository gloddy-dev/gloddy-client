'use client';

import BottomNavigation from '@/components/common/BottomNavigation';
import { usePathname } from 'next/navigation';

export default function MeetingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bottomNavPathName = ['/grouping', '/board', '/meeting', '/profile'];
  return (
    <div>
      <div className="relative h-full w-full max-w-[26.25rem] overflow-y-scroll bg-white px-24">
        {children}
      </div>
      {bottomNavPathName.includes(pathname) && <BottomNavigation />}
    </div>
  );
}
