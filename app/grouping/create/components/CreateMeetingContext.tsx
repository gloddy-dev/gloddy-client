import { createContext, useContext } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';

import type { CreateMeetingRequestType } from '../type';
import type { StrictPropsWithChildren } from '@/types';

const inputDefaultValues = {
  title: '',
  description: '',
  image: {
    imageFile: null,
    imageBlob: '',
  },
  date: new Date(),
  time: {
    fromHour: '1',
    fromMin: '00',
    fromAmPm: 'AM',
    toHour: '1',
    toMin: '00',
    toAmPm: 'AM',
  },
  // meetingLocation: '', // TODO : 지도 api 연동 후 추가
  meetingNumber: 0,
};
const CreateMeetingContext = createContext<UseFormReturn | null>(null);

export default function CreateMeetingContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<CreateMeetingRequestType>({
    defaultValues: inputDefaultValues,
  });

  const contextValue = { ...methods };

  return (
    <CreateMeetingContext.Provider value={contextValue as unknown as UseFormReturn}>
      {children}
    </CreateMeetingContext.Provider>
  );
}

export function useCreateMeetingContext() {
  const ctx = useContext(CreateMeetingContext) as UseFormReturn<CreateMeetingRequestType> | null;
  if (!ctx)
    throw new Error(
      'Cannot find CreateMeetingContext. It should be wrapped within CreateMeetingContext.Provider.'
    );
  return ctx;
}
