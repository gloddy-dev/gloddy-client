import type { ProfileRequest } from '@/apis/profile';

export interface ProfileEditState extends Omit<ProfileRequest, 'birth'> {
  birth: {
    year: string;
    month: string;
    date: string;
  };
}
