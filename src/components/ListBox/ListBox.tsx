import React from 'react';

import { Icon } from '@/components/Icon';
import { useListBoxContext } from '@/components/ListBox/ListBoxController';
import cn from '@/utils/cn';

import type { StrictPropsWithChildren } from '@/types';

interface ListBoxProps {
  name: string;
}

export default function ListBox({ name, children }: StrictPropsWithChildren<ListBoxProps>) {
  const { open, setOpen } = useListBoxContext();

  return (
    <>
      <div
        className="flex w-full cursor-pointer items-center justify-between rounded-8 border border-transparent bg-sub p-16 text-primary"
        onClick={() => setOpen(!open)}
      >
        <div>{name}</div>
        <Icon id="24-navigate_next" className={cn('rotate-90', { '-rotate-90': open })} />
      </div>
      {open && <div>{children}</div>}
    </>
  );
}
