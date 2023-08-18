import { SignUpRequest } from '@/apis/auth';

import type { DateType } from '@/types';

export interface SignUpState extends Omit<SignUpRequest, 'personalities' | 'birth' | 'gender'> {
  verifyNumber?: string;
  verifyEmailNumber?: string;

  personalityIdList: number[];

  birth: DateType;

  gender: '남성' | '여성';
}
