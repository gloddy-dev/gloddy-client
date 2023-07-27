'use client';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { SignUpState } from '../type';
import type { StrictPropsWithChildren } from '@/types';

const defaultValues: SignUpState = {
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
  const methods = useForm<SignUpState>({
    defaultValues,
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useJoinContext() {
  return useFormContext<SignUpState>();
}
