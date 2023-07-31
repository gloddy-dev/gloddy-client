import { GroupResponse } from '@/apis/groups';
import { Spacing } from '@/components/common/Spacing';
import { formatDate } from '@/utils/formatDate';

interface TimeSectionProps extends Pick<GroupResponse, 'meetDate' | 'startTime' | 'endTime'> {}

export default function TimeSection({ meetDate, startTime, endTime }: TimeSectionProps) {
  return (
    <section>
      <h2 className="text-14">모임 일시</h2>
      <Spacing size={10} />
      <div className="rounded-8 bg-gray6 p-16">
        <p className="text-14">{formatDate(meetDate, startTime, endTime)}</p>
      </div>
    </section>
  );
}
