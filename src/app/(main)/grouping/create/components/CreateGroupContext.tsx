'use client';
import { CreateGroupContextValue } from '../type';
import FormDevtools from '@/components/common/FormDevTools';
import { createContext, useContext } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';

import type { StrictPropsWithChildren } from '@/types';

const CreateGroupContext = createContext<UseFormReturn | null>(null);

export default function CreateGroupContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<CreateGroupContextValue>({
    defaultValues: {
      imageFile: undefined,
      title: '',
      content: '',
      meetDate: undefined,
      time: {
        fromHour: '01',
        fromMin: '00',
        fromAmPm: 'AM',
        toHour: '01',
        toMin: '00',
        toAmPm: 'AM',
      },
      placeName: '',
      placeAddress: '',
      placeLatitude: undefined,
      placeLongitude: undefined,
      maxUser: undefined,
    },
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
