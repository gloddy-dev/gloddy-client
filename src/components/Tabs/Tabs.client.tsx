'use client';
import cn from '@/utils/cn';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import {
  Children,
  type PropsWithChildren,
  ReactElement,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useState,
} from 'react';

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

const renderTabElement = (
  elements: ReactElement[],
  props: Array<React.ComponentProps<typeof Tab>>,
  isStretch: boolean
) => {
  if (elements.length === 1) {
    return elements[0];
  }

  return (
    <div className={cn('flex h-50 border-b border-white3 ', { 'gap-20 px-20': !isStretch })}>
      {elements.map((element, index) => {
        return cloneElement(element, {
          className: cn(props[index].className, { 'flex-1 justify-center': isStretch }),
        });
      })}
    </div>
  );
};

interface ListProps {
  isStretch?: boolean;
}

function List({ isStretch = true, children }: StrictPropsWithChildren<ListProps>) {
  const validChildren = Children.toArray(children).filter(
    (child) =>
      isValidElement(child) &&
      (
        child.type as {
          name: string;
        }
      ).name === 'Tab'
  ) as ReactElement[];

  if (validChildren.length === 0) {
    throw new Error('Tabs 컴포넌트는 Tab 컴포넌트를 포함해야 합니다.');
  }

  const props = validChildren.map((child) => child.props as React.ComponentProps<typeof Tab>);

  return <>{renderTabElement(validChildren, props, isStretch)}</>;
}

interface TabProps {
  value: string;
  text: string;
  queryString?: string;
  className?: string;
}

function Tab({ value, text, queryString, className }: TabProps) {
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
      className={cn(
        'flex cursor-pointer items-center',
        {
          'border-b-1 border-primary text-subtitle-2 text-primary': isActive,
        },
        className
      )}
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
