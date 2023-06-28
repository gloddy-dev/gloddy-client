'use client';

import BottomNavigation from '@/components/common/BottomNavigation';
import { usePathname } from 'next/navigation';

export default function MeetingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bottomNavPathName = ['/grouping', '/board', '/meeting', '/profile'];
  return (
    <div>
      <div className="h-full w-full bg-white3 px-24">{children}</div>
      {bottomNavPathName.includes(pathname) && <BottomNavigation />}
    </div>
  );
}
