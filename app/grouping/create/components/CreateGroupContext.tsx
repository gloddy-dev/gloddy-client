import { CreateGroupContextValue } from '../type';
import FormDevtools from '@/components/common/FormDevTools';
import { useGetForms } from '@/hooks/useGetForms';
import { createContext, useContext } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';

import type { StrictPropsWithChildren } from '@/types';

const inputDefaultValues: CreateGroupContextValue = {
  fileUrl: '',
  title: '',
  content: '',
  date: new Date(),
  time: {
    fromHour: '1',
    fromMin: '00',
    fromAmPm: 'AM',
    toHour: '1',
    toMin: '00',
    toAmPm: 'AM',
  },
  place: '',
  place_latitude: '',
  place_longitude: '', // TODO : 지도 api 연동 후 추가
  maxUser: 0,
};
const CreateGroupContext = createContext<UseFormReturn | null>(null);

export default function CreateGroupContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<CreateGroupContextValue>({
    defaultValues: inputDefaultValues,
  });
  const { content } = useGetForms(methods);
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
