'use client';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { BirthdayValueType, GenderType, StrictPropsWithChildren } from '@/types';

export type SignUpState = {
  certificateNumber: number;
  certificateEmailNumber: number;

  phoneNumber: string;
  imageUrl?: string;
  schoolInfo: {
    school: string;
    email?: string;
    certifiedStudent: boolean; // email이 없는 경우 false
  };
  nickname: string;
  birth: BirthdayValueType;
  gender: GenderType;
  personalities: string[];
};

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
