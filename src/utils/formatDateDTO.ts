import type { DateType } from '@/types';

export const addZero = (num: number) => (num < 10 ? `0${num}` : num);

export const formatDateDTO = (birth: DateType) => {
  const { year, month, date } = birth;

  return `${year.replace('년', '')}-${addZero(+month.replace('월', ''))}-${addZero(
    +date.replace('일', '')
  )}`;
};
