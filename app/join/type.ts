import { SignUpRequest } from '@/apis/auth';

import type { DateType } from '@/types';

export interface SignUpState extends Omit<SignUpRequest, 'personalities' | 'birth'> {
  certificateNumber?: number;
  certificateEmailNumber?: number;

  personalityIdList: number[];

  birth: DateType;
}
