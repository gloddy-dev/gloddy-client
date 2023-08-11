'use client';
import { SafeArea } from 'antd-mobile';

export default function MeetingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-42">
      <SafeArea position="top" />
      <div>{children}</div>
      <SafeArea position="bottom" />
    </div>
  );
}
