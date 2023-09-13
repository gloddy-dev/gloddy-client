import { useGetGroupDetail } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Spacing } from '@/components/Spacing';
import { TextField } from '@/components/TextField';
import { useNumberParams } from '@/hooks/useNumberParams';
import { formatMeetingDate } from '@/utils/formatMeetingDate';

export default function TimeSection() {
  const { t } = useTranslation('groupDetail');
  const { groupId } = useNumberParams<['groupId']>();
  const { data: groupDetailData } = useGetGroupDetail(groupId);

  const { meetDate, startTime } = groupDetailData;

  return (
    <section>
      <p className="pl-4 text-subtitle-3 text-sign-secondary">{t('details.meetDate')}</p>
      <Spacing size={4} />
      <TextField
        value={formatMeetingDate(meetDate, startTime)}
        className="text-paragraph-2"
        readOnly
      />
    </section>
  );
}
