import React, { Dispatch, SetStateAction, useState } from 'react';

import { Icon } from '@/components/Icon';

interface ListBoxProps {
  name: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ListBox: React.FC<ListBoxProps> = ({ name, children, open, setOpen }) => {
  return (
    <>
      <div
        className="flex w-full cursor-pointer items-center justify-between rounded-8 border-1 border-transparent bg-sub p-16 text-primary"
        onClick={() => setOpen(!open)}
      >
        <div>{name}</div>
        <Icon id="24-navigate_next" className="rotate-90" />
      </div>
      {open && <div className="block">{children}</div>}
    </>
  );
};

export default ListBox;
