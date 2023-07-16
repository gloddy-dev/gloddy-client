import { BirthdayValueType, GenderType, ImageType } from '@/types';

export type InputType = {
  nickname: string;
  profileImage: ImageType;
  birthday: BirthdayValueType;
  gender: GenderType;
};
