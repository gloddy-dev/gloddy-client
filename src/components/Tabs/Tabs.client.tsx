'use client';
import { PageAnimation } from '../PageAnimation';
import useAppRouter from '@/hooks/useAppRouter';
import cn from '@/utils/cn';
import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Children,
  type PropsWithChildren,
  ReactElement,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from 'react';

import type { StrictPropsWithChildren } from '@/types';

let elementId = 1;

export default function Tabs({ children }: StrictPropsWithChildren) {
  const [id] = useState(() => String(elementId++));

  return <LayoutGroup id={id}>{children}</LayoutGroup>;
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
    <div
      className={cn('flex h-50 border-b border-border-default bg-white', {
        'gap-20 px-20': !isStretch,
      })}
    >
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
  isSticky?: boolean;
}

function List({ isStretch = true, isSticky = true, children }: StrictPropsWithChildren<ListProps>) {
  const validChildren = Children.toArray(children).filter((child) =>
    isValidElement(child)
  ) as ReactElement[];

  if (validChildren.length === 0) {
    throw new Error('List 컴포넌트는 Tab 컴포넌트를 포함해야 합니다.');
  }

  const props = validChildren.map((child) => child.props as React.ComponentProps<typeof Tab>);

  const searchParams = useSearchParams();
  const { replace } = useAppRouter();
  const pathname = usePathname();

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (!tab) replace(`${pathname}?tab=${props[0].value}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn({ 'sticky left-0 top-48 z-[100]': isSticky })}>
      {renderTabElement(validChildren, props, isStretch)}
    </div>
  );
}

interface TabProps {
  value: string;
  text: string;
  queryString?: string;
  className?: string;
  disabled?: boolean;
}

function Tab({ value, text, queryString, className, disabled = false }: TabProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isActive = searchParams.get('tab') === value;

  return (
    <Link
      className={cn(
        'relative flex cursor-pointer items-center',
        {
          'text-sign-caption': disabled,
        },
        className
      )}
      href={{
        pathname,
        query: { tab: queryString ?? value },
      }}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
      scroll={false}
      replace
    >
      {text}
      {isActive && (
        <motion.span
          layout
          layoutRoot
          layoutId="underline"
          className="absolute bottom-0 left-0 w-full border-b-1 border-primary text-subtitle-2 text-primary"
        />
      )}
    </Link>
  );
}

function Panel({ value, children }: PropsWithChildren<Pick<TabProps, 'value'>>) {
  const searchParams = useSearchParams();
  const isActive = searchParams.get('tab') === value;

  return isActive && <PageAnimation>{children}</PageAnimation>;
}

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
