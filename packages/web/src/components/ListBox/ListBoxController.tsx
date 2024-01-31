import React, { ReactNode, createContext, useContext, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import ListBox from '@/components/ListBox/ListBox';
import ListBoxOptions from '@/components/ListBox/ListBoxOptions';

export type OptionType = {
  id: number;
  name: string;
};

interface ListBoxControllerProps {
  name: string;
  options: OptionType[];
  register: UseFormRegisterReturn;
}

interface ListBoxProviderProps {
  children: ReactNode;
}

const ListBoxContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
});

export const useListBoxContext = () => useContext(ListBoxContext);

const ListBoxProvider = ({ children }: ListBoxProviderProps) => {
  const [open, setOpen] = useState(false);

  return <ListBoxContext.Provider value={{ open, setOpen }}>{children}</ListBoxContext.Provider>;
};

export default function ListBoxController({ name, options, register }: ListBoxControllerProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (id: number) => {
    const selectedOption = options.find((option) => option.id === id);
    if (selectedOption) {
      setSelectedValue(selectedOption.name);

      register.onChange({
        target: { value: id.toString(), name: register.name },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <ListBoxProvider>
      <ListBox name={selectedValue || name}>
        <ListBoxOptions options={options} onSelect={handleSelect} />
      </ListBox>
    </ListBoxProvider>
  );
}
