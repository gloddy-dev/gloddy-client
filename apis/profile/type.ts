import { GenderType } from '@/types';
import { PersonalityType } from '@/types/profile';

export interface ProfileResponse {
  age: number;
  gender: 'MAIL' | 'FEMAIL';
  imageUrl: string;
  introduce: string;
  name: string;
  personlaities: PersonalityType[];
  praiseCount: number;
  reviewCount: number;
  school: string;
}
