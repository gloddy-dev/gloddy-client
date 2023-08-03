import type { PersonalityType } from '@/types/profile';

export interface ProfileResponse {
  age: number;
  gender: 'MAIL' | 'FEMAIL';
  imageUrl: string;
  introduce: string;
  name: string;
  personalities: Array<PersonalityType['keywordInEnglish']>;
  praiseCount: number;
  reviewCount: number;
  school: string;
}
