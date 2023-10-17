'use client';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { ProfileEditState } from '../type';
import type { StrictPropsWithChildren } from '@/types';

interface EditProviderProps {
  defaultValues?: ProfileEditState;
}

export default function EditProvider({
  defaultValues,
  children,
}: StrictPropsWithChildren<EditProviderProps>) {
  const hookForm = useForm<ProfileEditState>({ defaultValues, mode: 'onBlur' });

  return <FormProvider {...hookForm}>{children}</FormProvider>;
}

export function useEditContext() {
  return useFormContext<ProfileEditState>();
}
