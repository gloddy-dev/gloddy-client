import { GenderType } from '@/types';
import { PersonalityType } from '@/types/profile';

export interface ProfileResponse {
  age: number;
  gender: GenderType;
  imageUrl: string;
  introduce: string;
  name: string;
  personlaity: PersonalityType[];
  praseCount: number;
  reviewCount: number;
  school: string;
}
