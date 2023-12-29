import type { PersonalityType, ReliabilityType } from '@/types';

export interface ProfileResponse {
  userId: number;
  isCertifiedStudent: boolean;
  imageUrl: string;
  nickname: string;
  gender: 'MAIL' | 'FEMAIL';
  age: number;
  birth: string;
  school: string;
  introduce: string;
  personalities: Array<PersonalityType['keywordDTO']>;
  joinAt: string;
  reliabilityLevel: ReliabilityType;
  reliabilityScore: 0;
  participatedGroupCount: 0;
  praiseCount: number;
  reviewCount: number;
}

export interface ProfileRequest {
  imageUrl: string;
  name: string;
  gender: 'MAIL' | 'FEMAIL';
  introduce: string;
  personalities: Array<PersonalityType['keywordDTO']>;
  countryName: string;
  countryImage: string;
  birth: string;
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
