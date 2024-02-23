import React from 'react';

import type { StrictPropsWithChildren } from '@/types';

import { Icon } from '@/components/Icon';
import { useListBoxContext } from '@/components/ListBox/ListBoxController';
import cn from '@/utils/cn';

interface ListBoxProps {
  name: string;
}

export default function ListBox({ name, children }: StrictPropsWithChildren<ListBoxProps>) {
  const { open, setOpen } = useListBoxContext();

  return (
    <>
      <div
        className="rounded-8 bg-sub text-primary flex w-full cursor-pointer items-center justify-between border border-transparent p-16"
        onClick={() => setOpen(!open)}
      >
        <div>{name}</div>
        <Icon id="24-navigate_next" className={cn('rotate-90', { '-rotate-90': open })} />
      </div>
      {open && <div>{children}</div>}
    </>
  );
}
