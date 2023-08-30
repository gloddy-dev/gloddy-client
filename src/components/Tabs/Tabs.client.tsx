'use client';
import cn from '@/utils/cn';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  Children,
  type PropsWithChildren,
  ReactElement,
  cloneElement,
  isValidElement,
} from 'react';

import type { StrictPropsWithChildren } from '@/types';

export default function Tabs({ children }: StrictPropsWithChildren) {
  return <>{children}</>;
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
  const validChildren = Children.toArray(children).filter((child) =>
    isValidElement(child)
  ) as ReactElement[];

  if (validChildren.length === 0) {
    throw new Error('List 컴포넌트는 Tab 컴포넌트를 포함해야 합니다.');
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
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isActive = searchParams.get('tab') === value;

  return (
    <Link
      className={cn(
        'flex cursor-pointer items-center',
        {
          'border-b-1 border-primary text-subtitle-2 text-primary': isActive,
        },
        className
      )}
      href={{
        pathname,
        query: { tab: queryString ?? value },
      }}
      scroll={false}
      replace
    >
      {text}
    </Link>
  );
}

function Panel({ value, children }: PropsWithChildren<Pick<TabProps, 'value'>>) {
  const searchParams = useSearchParams();
  const isActive = searchParams.get('tab') === value;

  return isActive && children;
}

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
