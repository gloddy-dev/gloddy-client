import { Spacing } from '@/components/common/Spacing';
import { TextField } from '@/components/TextField';
import { DAY_OF_WEEK } from '@/constants';
import { format, getDay, parseISO } from 'date-fns';

import type { GroupDetailResponse } from '@/apis/groups/type';

interface TimeSectionProps
  extends Pick<GroupDetailResponse, 'meetDate' | 'startTime' | 'endTime'> {}

const displayDate = (meetDate: string, startTime: string, endTime: string) => {
  const formattedDate = format(parseISO(meetDate), 'yyyy. MM. dd.');

  const dayOfWeekIndex = getDay(parseISO(meetDate));
  const formattedDayOfWeek = DAY_OF_WEEK[dayOfWeekIndex];

  const formattedStartTime = format(parseISO(meetDate + ' ' + startTime), 'hh:mm a');
  const formattedEndTime = format(parseISO(meetDate + ' ' + endTime), 'hh:mm a');

  return `${formattedDate} ${formattedDayOfWeek} ${formattedStartTime} ~ ${formattedEndTime}`;
};

export default function TimeSection({ meetDate, startTime, endTime }: TimeSectionProps) {
  return (
    <section>
      <p className="pl-4 text-subtitle-3 text-sign-secondary">모임 일시</p>
      <Spacing size={4} />
      <TextField
        disabled
        value={displayDate(meetDate, startTime, endTime)}
        className="text-paragraph-2"
      />
    </section>
  );
}
