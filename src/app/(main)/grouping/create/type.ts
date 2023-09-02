import type { TimeType } from '@/types';

export interface CreateGroupContextValue {
  imageUrl: string;
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
