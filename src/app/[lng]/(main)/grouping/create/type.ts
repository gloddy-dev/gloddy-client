import type { TimeType } from '@/types';

export interface CreateGroupContextValue {
  imageUrl: string;
  title: string;
  content: string;
  meetDate: Date;
  time: TimeType;
  place: {
    name: string;
    address: string;
    latitude: string;
    longitude: string;
  };
  maxUser: number;
}
