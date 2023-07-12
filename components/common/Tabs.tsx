'use client';
import clsx from 'clsx';
import { type PropsWithChildren, createContext, useContext, useState } from 'react';
import type { StrictPropsWithChildren } from '@/types';

const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
} | null>(null);

interface TabsProps {
  defaultActiveTab: string;
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
}

function Tab({ value, text }: TabProps) {
  const { activeTab, setActiveTab } = useContext(TabsContext)!;

  const isActive = activeTab === value;

  return (
    <div
      className={clsx(
        'flex flex-1 cursor-pointer items-center justify-center',
        isActive && 'border-b-4 border-blue3'
      )}
      onClick={() => setActiveTab(value)}
    >
      {text}
    </div>
  );
}

function Panel({ value, children }: PropsWithChildren<Pick<TabProps, 'value'>>) {
  const { activeTab } = useContext(TabsContext)!;

  return <div className={activeTab === value ? 'block' : 'hidden'}>{children}</div>;
}

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
