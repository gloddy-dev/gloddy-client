'use client';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';

export default function GroupingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-20">
      <TopNavigationBar text="회원가입" />
      <div className="h-30" />
      {children}
    </div>
  );
}
