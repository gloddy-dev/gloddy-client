'use client';

import './globals.css';
import BottomNavigation from '@/components/common/BottomNavigation';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bottomNavPathName = ['/grouping', '/board', '/meeting', '/profile'];
  return (
    <html lang="ko">
      <body className="flex h-screen w-screen justify-center bg-slate-50">
        <div className="relative h-full w-full max-w-[26.25rem] overflow-y-scroll bg-white px-24">
          {children}
        </div>
        {bottomNavPathName.includes(pathname) && <BottomNavigation />}
      </body>
    </html>
  );
}
