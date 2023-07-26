'use client';
import { SignUpState } from '../type';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { StrictPropsWithChildren } from '@/types';

export default function JoinContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<SignUpState>();

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useJoinContext() {
  return useFormContext<SignUpState>();
}
