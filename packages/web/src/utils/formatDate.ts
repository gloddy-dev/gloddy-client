import { format, formatDistanceToNow } from 'date-fns';

export const formatDate = (date: string, locale: Locale) => {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;
  if (diff < 60 * 1) {
    return '방금 전';
  }
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, { addSuffix: true, locale });
  }
  return format(d, 'MM/dd', { locale });
};
