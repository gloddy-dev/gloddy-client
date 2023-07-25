import { createContext, useContext } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';

import type { CreateGroupRequest } from '@/apis/groups';
import type { StrictPropsWithChildren } from '@/types';

const inputDefaultValues: CreateGroupRequest = {
  fileUrl: '',
  title: '',
  content: '',
  meetDate: '',
  startTime: '',
  endTime: '',
  place: '',
  place_latitude: '',
  place_longitude: '', // TODO : 지도 api 연동 후 추가
  maxUser: 0,
};
const CreateGroupContext = createContext<UseFormReturn | null>(null);

export default function CreateGroupContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<CreateGroupRequest>({
    defaultValues: inputDefaultValues,
  });

  const contextValue = { ...methods };

  return (
    <CreateGroupContext.Provider value={contextValue as unknown as UseFormReturn}>
      {children}
    </CreateGroupContext.Provider>
  );
}

export function useCreateGroupContext() {
  const ctx = useContext(CreateGroupContext) as UseFormReturn<CreateGroupRequest> | null;
  if (!ctx)
    throw new Error(
      'Cannot find CreateGroupContext. It should be wrapped within CreateGroupContext.Provider.'
    );
  return ctx;
}
