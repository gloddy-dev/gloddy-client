'use client';

import { DeleteState } from '../type';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { StrictPropsWithChildren } from '@/types';

const defaultValues = {
  isDeleteAgree: false,
  deleteReason: [],
};

export default function DeleteProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<DeleteState>({
    defaultValues,
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useDeleteContext() {
  return useFormContext<DeleteState>();
}
