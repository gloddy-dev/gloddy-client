'use client';
import { SignUpState } from '../type';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { StrictPropsWithChildren } from '@/types';

const defaultValues = {
  certificateNumber: 0,
  certificateEmailNumber: 0,

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
  personalities: [],
};

export default function JoinContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<SignUpState>({
    defaultValues,
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useJoinContext() {
  return useFormContext<SignUpState>();
}
