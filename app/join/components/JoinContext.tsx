'use client';
import { SignUpState } from '../type';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { BirthdayValueType, GenderType, StrictPropsWithChildren } from '@/types';

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
    year: 2000,
    month: 1,
    date: 1,
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
