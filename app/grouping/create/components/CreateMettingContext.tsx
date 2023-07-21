import { FormProvider, useForm } from 'react-hook-form';

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
  meetingLocation: '',
  meetingNumber: 0,
};

export default function CreateMeetingContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<CreateMeetingRequestType>({
    defaultValues: inputDefaultValues,
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}
