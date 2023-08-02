import { SignUpRequest } from '@/apis/auth';

import type { DateType } from '@/types';

export interface SignUpState extends Omit<SignUpRequest, 'personalities' | 'birth'> {
  verifyNumber?: number;
  verifyEmailNumber?: number;

  personalityIdList: number[];

  birth: DateType;
}
