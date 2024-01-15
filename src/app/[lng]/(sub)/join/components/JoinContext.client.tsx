'use client';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { SignUpState } from '../type';
import type { StrictPropsWithChildren } from '@/types';

const defaultValues = {
  phoneNumber: '',
  verifyNumber: '',
  imageUrl: '',
  schoolInfo: {
    school: '',
    email: '',
    certifiedStudent: false,
  },
  verifyEmailNumber: '',
  nickname: '',
  birth: '',
  gender: undefined,
  personalityIdList: [],
  countryName: 'Korea',
  countryImage:
    'https://opendata.mofa.go.kr:8444/fileDownload/images/country_images/flags/241/20220224_233513043.gif',
};

export default function JoinContextProvider({ children }: StrictPropsWithChildren) {
  const methods = useForm<SignUpState>({
    defaultValues,
    mode: 'onBlur',
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

export function useJoinContext() {
  return useFormContext<SignUpState>();
}
