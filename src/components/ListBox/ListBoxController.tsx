import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import ListBox from '@/components/ListBox/ListBox';
import ListBoxOptions from '@/components/ListBox/ListBoxOptions';

interface ListBoxControllerProps {
  name: string;
  options: string[];
  register: UseFormRegisterReturn;
}

const ListBoxController: React.FC<ListBoxControllerProps> = ({ name, options, register }) => {
  const [selectedValue, setSelectedValue] = useState<string>(name);
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    register.onChange({
      target: { value, name: register.name },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <ListBox name={selectedValue} open={open} setOpen={setOpen}>
      <ListBoxOptions options={options} onSelect={handleSelect} setOpen={setOpen} />
    </ListBox>
  );
};

export default ListBoxController;
