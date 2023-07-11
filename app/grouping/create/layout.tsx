import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';

export default function GroupingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <TopNavigationBar isLeft text="모임 개설" />
      {children}
    </div>
  );
}
