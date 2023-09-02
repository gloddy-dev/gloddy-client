import type { TimeType } from '@/types';

export function getDayName(dayIndex: number) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return days[dayIndex];
}

export function getMonthName(monthIndex: number) {
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  return months[monthIndex];
}

export function displayDate(date: Date | undefined, time: TimeType) {
  if (
    !date ||
    !time.fromHour ||
    !time.fromMin ||
    !time.fromAmPm ||
    !time.toHour ||
    !time.toMin ||
    !time.toAmPm
  ) {
    return '';
  }

  const year = date.getFullYear();
  const month = getMonthName(date.getMonth());
  const day = date.getDate().toString().padStart(2, '0');
  const dayName = getDayName(date.getDay());
  return `${year}. ${month}. ${day} ${dayName} ${time.fromHour}:${time.fromMin} ${time.fromAmPm} ~ ${time.toHour}:${time.toMin} ${time.toAmPm}`;
}
