import { DAY_OF_WEEK } from '@/constants';
import { format, getDay, parseISO } from 'date-fns';

export function formatMeetingDate(meetDate: string, startTime: string) {
  const startDate = parseISO(meetDate);
  const dayOfWeekIndex = getDay(startDate);
  const formattedDayOfWeek = DAY_OF_WEEK[dayOfWeekIndex];

  const formattedTime = format(parseISO(meetDate + ' ' + startTime), 'hh:mma');

  return `${format(startDate, 'MM.dd')} ${formattedDayOfWeek} ${formattedTime}`;
}
