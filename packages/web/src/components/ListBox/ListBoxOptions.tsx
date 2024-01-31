import React, { Dispatch, SetStateAction } from 'react';

import { OptionType, useListBoxContext } from '@/components/ListBox/ListBoxController';

interface ListBoxOptionsProps {
  options: OptionType[];
  onSelect: (id: number) => void;
}

export default function ListBoxOptions({ options, onSelect }: ListBoxOptionsProps) {
  const { setOpen } = useListBoxContext();

  return (
    <div className="rounded-8 border-1 border-primary bg-white">
      {options.map((option) => (
        <div
          key={option.id}
          onClick={() => {
            onSelect(option.id);
            setOpen(false);
          }}
          className={'p-16'}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
}
