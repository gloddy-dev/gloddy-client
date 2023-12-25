import React, { Dispatch, SetStateAction } from 'react';

interface ListBoxOptionsProps {
  options: string[];
  onSelect: (value: string) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ListBoxOptions: React.FC<ListBoxOptionsProps> = ({ options, onSelect, setOpen }) => {
  return (
    <div className="rounded-8 border-1 border-primary bg-white">
      {options.map((option) => (
        <div
          key={option}
          onClick={() => {
            onSelect(option);
            setOpen(false);
          }}
          className={'p-16'}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default ListBoxOptions;
