import { PersonalityType } from '@/types';

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

export interface PraisesResponse {
  totalCalmCount: number;
  totalKindCount: number;
  totalActiveCount: number;
  totalHumorCount: number;
  totalAbsenceCount: number;
  [key: string]: number;
}
