import { SignUpRequest } from '@/apis/auth';

import type { BirthdayValueType } from '@/types';

export type SignUpStateType = {
  certificateNumber?: number;
  certificateEmailNumber?: number;

  personalityIdList: number[];

  birth: BirthdayValueType;
} & Omit<SignUpRequest, 'personalities' | 'birth'>;
