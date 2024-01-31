import type { TimeType } from '@/types';

export interface CreateGroupContextValue {
  imageUrl: string;
  previewImage: string;
  title: string;
  content: string;
  meetDate: Date;
  time: TimeType;
  place: {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
  };
  maxUser: number;
}
