'use client';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { SignUpState } from '../type';
import type { StrictPropsWithChildren } from '@/types';

const defaultValues = {
  phoneNumber: '',
  verifyNumber: '',
  imageUrl:
    'https://gloddy.s3.ap-northeast-2.amazonaws.com/file/5619c043-060b-4ce0-8797-d9bc2a94a18f.png',
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
