'use client';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { StrictPropsWithChildren } from '@/types';

export interface FeedbackRequestType {
  praiseInfos: Array<{ userId: number; praiseValue: string }>;
  mateInfo: { userId: number; selectionReason: string };
}

export default function FeedbackContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<FeedbackRequestType>({
    defaultValues: {
      praiseInfos: [],
      mateInfo: { userId: 0, selectionReason: '' },
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useFeedbackContext() {
  return useFormContext<FeedbackRequestType>();
}
