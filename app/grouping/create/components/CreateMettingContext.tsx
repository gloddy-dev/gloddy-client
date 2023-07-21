import { CreateMeetingRequestType } from '../type';
import { StrictPropsWithChildren } from '@/types';
import { createContext, useContext, useMemo } from 'react';
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  useForm,
} from 'react-hook-form';

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
  meetingLocation: '',
  meetingNumber: 0,
};

interface CreateMeetingContextValue {
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  setValue: UseFormSetValue<any>;
}

const CreateMeetingContext = createContext<CreateMeetingContextValue | null>(null);

export default function CreateMeetingContextProvider({ children }: StrictPropsWithChildren) {
  const { register, watch, handleSubmit, setValue } = useForm<CreateMeetingRequestType>({
    defaultValues: inputDefaultValues,
  });

  const contextValue = { register, watch, handleSubmit, setValue };

  // const contextValue = useMemo(
  //   () => ({ register, watch, handleSubmit, setValue }),
  //   [register, watch, handleSubmit, setValue]
  // );

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

export { CreateMeetingContextProvider, useCreateMeetingContext };
