export type PageType = 'grouping' | 'meeting' | 'profile';

export type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

export interface ImageType {
  imageFile: File | null;
  imageBlob: string;
}

export interface TimeType {
  fromHour: number;
  fromMin: number;
  fromAmPm: AMPMType;
  toHour: number;
  toMin: number;
  toAmPm: AMPMType;
}

export type DateType = {
  year: string;
  month: string;
  date: string;
};

export type GenderType = '남성' | '여성';

export type AMPMType = 'AM' | 'PM';
