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

interface Mate {
  mateImageUrl: string;
  mateName: string;
  school: string;
  createdAt: string; // or Date if you're going to handle this as a Date object
  selectionReason: string;
}

export interface MatesResponse {
  mates: Mate[];
}
