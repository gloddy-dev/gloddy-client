'use client';
import { CreateGroupContextValue } from '../type';
import FormDevtools from '@/components/common/FormDevTools';
import { createContext, useContext } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';

import type { StrictPropsWithChildren } from '@/types';

const inputDefaultValues: CreateGroupContextValue = {
  imageUrl: '',
  title: '',
  content: '',
  date: new Date(),
  time: {
    fromHour: '1',
    fromMin: '0',
    fromAmPm: 'AM',
    toHour: '1',
    toMin: '0',
    toAmPm: 'AM',
  },
  place: '',
  placeLatitude: 0,
  placeLongitude: 0,
  maxUser: 0,
};
const CreateGroupContext = createContext<UseFormReturn | null>(null);

export default function CreateGroupContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<CreateGroupContextValue>({
    defaultValues: inputDefaultValues,
  });

  const contextValue = { ...methods };

  return (
    <>
      <CreateGroupContext.Provider value={contextValue as unknown as UseFormReturn}>
        {children}
      </CreateGroupContext.Provider>
      <FormDevtools control={methods.control} />
    </>
  );
}

export function useCreateGroupContext() {
  const ctx = useContext(CreateGroupContext) as UseFormReturn<CreateGroupContextValue> | null;
  if (!ctx)
    throw new Error(
      'Cannot find CreateGroupContext. It should be wrapped within CreateGroupContext.Provider.'
    );
  return ctx;
}
