import { createContext, useContext, useMemo } from 'react';
import { useForm } from 'react-hook-form';

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
const CreateMeetingContext = createContext<any>(null);

export default function CreateMeetingContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<CreateMeetingRequestType>({
    defaultValues: inputDefaultValues,
  });

  const contextValue = { ...methods };

  return (
    <CreateMeetingContext.Provider value={contextValue}>{children}</CreateMeetingContext.Provider>
  );
}

const useCreateMeetingContext = () => {
  const ctx = useContext(CreateMeetingContext);
  if (!ctx)
    throw new Error(
      'Cannot find SignupContext. It should be wrapped within SignupContextProvider.'
    );
  return ctx;
};

export { useCreateMeetingContext };
