import { differenceInDays } from 'date-fns';

export const formatRelativeDate = (date: string) => {
  const relativeDate = differenceInDays(new Date(), new Date(date));
  if (relativeDate === 0) return '오늘';
  if (relativeDate > 0) return `${relativeDate}일 전`;
  else return '날짜 이상';
};
