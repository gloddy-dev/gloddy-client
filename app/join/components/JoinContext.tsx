'use client';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { SignUpStateType } from '../type';
import type { StrictPropsWithChildren } from '@/types';

const defaultValues: SignUpStateType = {
  phoneNumber: '',
  imageUrl: '',
  schoolInfo: {
    school: '',
    email: '',
    certifiedStudent: false,
  },
  nickname: '',
  birth: {
    year: 0,
    month: 0,
    date: 0,
  },
  gender: '',
  personalityIdList: [],
};

export default function JoinContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<SignUpStateType>({
    defaultValues,
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useJoinContext() {
  return useFormContext<SignUpStateType>();
}
