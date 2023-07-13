import type { ImageType, TimeType } from '@/types';

export type InputType = {
  title: string;
  description: string;
  image: ImageType;
  date: Date;
  time: TimeType;
  meetingLocation: string;
  meetingNumber: number;
};

export type ModalNameType = 'meetingDate' | 'meetingLocation' | 'meetingNumber';
