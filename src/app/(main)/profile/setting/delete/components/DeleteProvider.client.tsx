'use client';

import { DeleteState } from '../type';
import { StrictPropsWithChildren } from '@/types';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

const defaultValues = {
  idDeleteAgree: false,
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
