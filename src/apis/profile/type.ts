import { DateType, GenderType, PersonalityType } from '@/types';

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

export interface ProfileRequest {
  imageUrl: string;
  name: string;
  birth: DateType;
  gender: GenderType;
  introduce: string;
  personalities: PersonalityType;
}

export interface PraisesResponse {
  totalCalmCount: number;
  totalKindCount: number;
  totalActiveCount: number;
  totalHumorCount: number;
  totalAbsenceCount: number;
}

export interface Mate {
  mateImageUrl: string;
  mateName: string;
  school: string;
  createdAt: string; // or Date if you're going to handle this as a Date object
  selectionReason: string;
}

export interface MatesResponse {
  mates: Mate[];
}
