import type { PersonalityType, ReliabilityType } from '@/types';

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
  birth: string;
  reliability: ReliabilityType;
}

export interface ProfileRequest {
  imageUrl: string;
  name: string;
  birth: string;
  gender: 'MAIL' | 'FEMAIL';
  introduce: string;
  personalities: Array<PersonalityType['keywordInEnglish']>;
}

export interface PraisesResponse {
  totalCalmCount: number;
  totalKindCount: number;
  totalActiveCount: number;
  totalHumorCount: number;
  totalAbsenceCount: number;
}

export interface Mate {
  mateId: number;
  mateImageUrl: string;
  mateName: string;
  school: string;
  createdAt: string;
  selectionReason: string;
}

export interface MatesResponse {
  mates: Mate[];
}
