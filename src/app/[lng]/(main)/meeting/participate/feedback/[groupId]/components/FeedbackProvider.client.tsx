'use client';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { EstimateRequest } from '@/apis/groups';
import type { StrictPropsWithChildren } from '@/types';

export type FeedbackRequestType = EstimateRequest['payload'];

export default function FeedbackContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<FeedbackRequestType>({
    defaultValues: {
      praiseInfos: [],
      mateInfo: { selectionReason: '' },
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useFeedbackContext() {
  return useFormContext<FeedbackRequestType>();
}
