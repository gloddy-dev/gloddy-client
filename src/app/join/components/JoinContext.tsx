'use client';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { SignUpState } from '../type';
import type { StrictPropsWithChildren } from '@/types';

const defaultValues = {
  phoneNumber: '',
  imageUrl: '',
  schoolInfo: {
    school: '',
    email: '',
    certifiedStudent: false,
  },
  nickname: '',
  birth: {
    year: '',
    month: '',
    date: '',
  },
  gender: undefined,
  personalityIdList: [],
};

export default function JoinContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<SignUpState>({
    defaultValues,
    mode: 'onBlur',
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useJoinContext() {
  return useFormContext<SignUpState>();
}
