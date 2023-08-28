'use client';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { ProfileEditState } from '../type';
import type { PersonalityType, StrictPropsWithChildren } from '@/types';

const formDefaultValue: ProfileEditState = {
  name: '',
  birth: {
    year: '',
    month: '',
    date: '',
  },
  gender: 'MAIL',
  imageUrl: '',
  introduce: '',
  personalities: [],
};

export default function EditProvider({ children }: StrictPropsWithChildren) {
  const hookForm = useForm<ProfileEditState>({ defaultValues: formDefaultValue, mode: 'onBlur' });

  return <FormProvider {...hookForm}>{children}</FormProvider>;
}

export function useEditContext() {
  return useFormContext<ProfileEditState>();
}
