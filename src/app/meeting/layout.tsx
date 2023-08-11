export default function MeetingLayout({ children }: { children: React.ReactNode }) {
  // const bottomNavPathName = ['/grouping', '/board', '/meeting', '/profile'];
  return (
    <div>
      <div className="h-full w-full bg-white3 px-24">{children}</div>
      {/* BottomNavigationBat */}
    </div>
  );
}
