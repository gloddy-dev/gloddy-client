export default function BoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="relative h-full bg-white px-24">{children}</div>
      {/* BottomNavigationBar */}
    </div>
  );
}
