'use client';
import { createContext, useContext } from 'react';
import { type UseFormReturn, useForm } from 'react-hook-form';

import type { CreateGroupContextValue } from '../type';
import type { StrictPropsWithChildren } from '@/types';

const CreateGroupContext = createContext<UseFormReturn | null>(null);

export default function CreateGroupContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<CreateGroupContextValue>({
    defaultValues: {
      imageUrl: '',
      title: '',
      content: '',
      meetDate: undefined,
      time: {
        fromHour: '',
        fromMin: '',
        fromAmPm: 'AM',
      },
      place: {
        name: '',
        address: '',
        latitude: '',
        longitude: '',
      },
      maxUser: 3,
    },
  });

  const contextValue = { ...methods };

  return (
    <CreateGroupContext.Provider value={contextValue as unknown as UseFormReturn}>
      {children}
    </CreateGroupContext.Provider>
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
