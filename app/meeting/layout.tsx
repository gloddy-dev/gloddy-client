import { BottomNavigationBar } from '@/components/common/NavigationBar';
import PageTransition from '@/components/common/PageTransition';

export default function MeetingLayout({ children }: { children: React.ReactNode }) {
  // const bottomNavPathName = ['/grouping', '/board', '/meeting', '/profile'];
  return (
    <div>
      <div className="h-full w-full bg-white3 px-24">{children}</div>
      <BottomNavigationBar page="meeting" />
    </div>
  );
}
