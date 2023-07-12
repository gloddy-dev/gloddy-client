'use client';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import type { StrictPropsWithChildren } from '@/types';

export default function Tabs({ children }: StrictPropsWithChildren) {
  return <div className="flex h-50 border-b border-white3">{children}</div>;
}

interface TabProps {
  title: string;
  url: string;
}

function Tab({ title, url }: TabProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === url;

  return (
    <div
      className={clsx(
        'flex flex-1 cursor-pointer items-center justify-center text-gray7',
        isActive && 'border-b-4 border-blue3'
      )}
      onClick={() => router.push(url)}
    >
      {title}
    </div>
  );
}

Tabs.Tab = Tab;
