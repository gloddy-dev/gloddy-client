import { SignUpRequest } from '@/apis/auth';

export interface SignUpState extends Omit<SignUpRequest, 'personalities' | 'birth'> {
  verifyNumber: string;
  verifyEmailNumber: string;

  personalityIdList: number[];

  birth: string;
}
