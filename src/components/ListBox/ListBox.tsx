import React from 'react';

import { Icon } from '@/components/Icon';
import { useListBoxContext } from '@/components/ListBox/ListBoxController';

interface ListBoxProps {
  name: string;
  children: React.ReactNode;
}

export default function ListBox({ name, children }: ListBoxProps) {
  const { open, setOpen } = useListBoxContext();

  return (
    <>
      <div
        className="flex w-full cursor-pointer items-center justify-between rounded-8 border-1 border-transparent bg-sub p-16 text-primary"
        onClick={() => setOpen(!open)}
      >
        <div>{name}</div>
        <Icon id="24-navigate_next" className={`rotate-90 ${open ? '-rotate-90' : ''}`} />
      </div>
      {open && <div className="block">{children}</div>}
    </>
  );
}
