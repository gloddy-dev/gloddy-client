'use client';

import BottomNavigation from '@/components/common/NavigationBar/BottomNavigation';
import { usePathname } from 'next/navigation';

export default function BoardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bottomNavPathName = ['/grouping', '/board', '/meeting', '/profile'];
  return (
    <div>
      <div className="relative h-full bg-white px-24">{children}</div>
      {bottomNavPathName.includes(pathname) && <BottomNavigation />}
    </div>
  );
}
