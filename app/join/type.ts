import { BirthdayValueType, GenderType } from '@/types';

export interface SignUpState {
  certificateNumber: number;
  certificateEmailNumber: number;

  phoneNumber: string;
  imageUrl?: string;
  schoolInfo: {
    school: string;
    email?: string;
    certifiedStudent: boolean; // email이 없는 경우 false
  };
  nickname: string;
  birth: BirthdayValueType;
  gender: GenderType;
  personalities: string[];
}
