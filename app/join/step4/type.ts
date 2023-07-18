import type { BirthdayValueType, GenderType, ImageType } from '@/types';

export type Step4InputType = {
  nickname: string;
  profileImage: ImageType;
  birthday: BirthdayValueType;
  gender: GenderType;
};
