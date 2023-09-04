import { useGetGroupDetail } from '@/apis/groups';
import { Spacing } from '@/components/common/Spacing';
import { TextField } from '@/components/TextField';
import { useNumberParams } from '@/hooks/useNumberParams';
import { formatMeetingDate } from '@/utils/formatMeetingDate';

export default function TimeSection() {
  const { groupId } = useNumberParams<['groupId']>();
  const { data: groupDetailData } = useGetGroupDetail(groupId);

  const { meetDate, startTime } = groupDetailData;

  return (
    <section>
      <p className="pl-4 text-subtitle-3 text-sign-secondary">모임 일시</p>
      <Spacing size={4} />
      <TextField
        value={formatMeetingDate(meetDate, startTime)}
        className="text-paragraph-2"
        readOnly
      />
    </section>
  );
}
