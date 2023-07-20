export type PageType = 'grouping' | 'meeting' | 'profile';

export type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

export interface ImageType {
  imageFile: File | null;
  imageBlob: string;
}

export interface TimeType {
  fromHour: string;
  fromMin: string;
  fromAmPm: string;
  toHour: string;
  toMin: string;
  toAmPm: string;
}

export interface BirthdayValueType {
  year: string;
  month: string;
  date: string;
}

export type GenderType = '남성' | '여성';
