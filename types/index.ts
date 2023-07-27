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

export type BirthdayValueType = {
  year: number;
  month: number;
  date: number;
};

export type GenderType = '남성' | '여성';
