import React, { ReactNode, createContext, useContext, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import ListBox from '@/components/ListBox/ListBox';
import ListBoxOptions from '@/components/ListBox/ListBoxOptions';

interface ListBoxControllerProps {
  name: string;
  options: string[];
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
  const [selectedValue, setSelectedValue] = useState<string>(name);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    register.onChange({
      target: { value, name: register.name },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <ListBoxProvider>
      <ListBox name={selectedValue}>
        <ListBoxOptions options={options} onSelect={handleSelect} />
      </ListBox>
    </ListBoxProvider>
  );
}
