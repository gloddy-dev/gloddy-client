'use client';
import { SignUpRequest } from '@/apis/auth';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { StrictPropsWithChildren } from '@/types';

export default function JoinContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<SignUpRequest>({
    defaultValues: {
      phoneNumber: '',
      imageUrl: '',
      schoolInfo: {
        school: '',
        email: '',
        certifiedStudent: false,
      },
      nickname: '',
      birth: '',
      gender: '',
      personalities: [],
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useJoinContext() {
  return useFormContext<SignUpRequest>();
}
