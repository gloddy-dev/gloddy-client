import type { TimeType } from '@/types';

export interface CreateGroupContextValue {
  imageFile: File;
  title: string;
  content: string;
  meetDate: Date;
  time: TimeType;
  placeName: string;
  placeAddress: string;
  placeLatitude: number;
  placeLongitude: number;
  maxUser: number;
}

export type ModalNameType = 'meetingDate' | 'meetingLocation' | 'meetingNumber';
