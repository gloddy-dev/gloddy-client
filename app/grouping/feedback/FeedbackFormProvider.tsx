'use client';
import { FormProvider, useForm } from 'react-hook-form';

import type { StrictPropsWithChildren } from '@/types';

export default function FeedbackFormProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
}
