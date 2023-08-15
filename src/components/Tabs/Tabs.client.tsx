'use client';
import cn from '@/utils/cn';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { type PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

import type { StrictPropsWithChildren } from '@/types';

const TabsContext = createContext<{
  activeTab: string | number;
  setActiveTab: (value: string | number) => void;
} | null>(null);

const useTabsContext = () => {
  const ctx = useContext(TabsContext);

  if (!ctx) {
    throw new Error('Tabs 컴포넌트 내부에서만 사용할 수 있습니다.');
  }

  return ctx;
};

interface TabsProps {
  defaultActiveTab: string | number;
}

export default function Tabs({ defaultActiveTab, children }: StrictPropsWithChildren<TabsProps>) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>
  );
}

function List({ children }: StrictPropsWithChildren) {
  return <div className="flex h-50 border-b border-white3">{children}</div>;
}

interface TabProps {
  value: string;
  text: string;
  queryString?: string;
}

function Tab({ value, text, queryString }: TabProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const router = useRouter();
  const pathname = usePathname();

  const isActive = activeTab === value;

  useEffect(() => {
    if (isActive) {
      router.replace(`${pathname}?tab=${queryString ?? value}`);
    }
  }, [isActive, pathname, queryString, router, value]);

  return (
    <div
      className={cn('flex flex-1 cursor-pointer items-center justify-center', {
        'border-b-1 border-primary text-subtitle-2 text-primary': isActive,
      })}
      onClick={() => setActiveTab(value)}
    >
      {text}
    </div>
  );
}

function Panel({ value, children }: PropsWithChildren<Pick<TabProps, 'value'>>) {
  const { activeTab } = useTabsContext();

  return <div className={activeTab === value ? 'block' : 'hidden'}>{children}</div>;
}

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
