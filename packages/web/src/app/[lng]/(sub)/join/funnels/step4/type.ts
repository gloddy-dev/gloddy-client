import type { DateType, GenderType, ImageType } from '@/types';

export type Step4InputType = {
  nickname: string;
  profileImage: ImageType;
  birthday: DateType;
  gender: GenderType;
};
