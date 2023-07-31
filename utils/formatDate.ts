import { format, getDay, parseISO } from 'date-fns';

export const formatDate = (meetDate: string, startTime: string, endTime: string) => {
  const formattedDate = format(parseISO(meetDate), 'yyyy. MM. dd.');

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayOfWeekIndex = getDay(parseISO(meetDate));
  const formattedDayOfWeek = days[dayOfWeekIndex];

  const formattedStartTime = format(parseISO(meetDate + ' ' + startTime), 'hh:mm a');
  const formattedEndTime = format(parseISO(meetDate + ' ' + endTime), 'hh:mm a');

  return `${formattedDate} ${formattedDayOfWeek} ${formattedStartTime} ~ ${formattedEndTime}`;
};
