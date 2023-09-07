'use client';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { EstimateRequest } from '@/apis/groups';
import type { StrictPropsWithChildren } from '@/types';

export type FeedbackRequestType = EstimateRequest['payload'];

export default function FeedbackContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<FeedbackRequestType>({
    defaultValues: {
      praiseInfos: [{ userId: 0, praiseValue: '유머러스' }],
      mateInfo: { userId: 0, selectionReason: '' },
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useFeedbackContext() {
  return useFormContext<FeedbackRequestType>();
}
