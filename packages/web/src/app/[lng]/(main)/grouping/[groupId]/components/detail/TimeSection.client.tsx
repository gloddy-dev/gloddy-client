import { GroupDetailResponse } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Spacing } from '@/components/Spacing';
import { TextField } from '@/components/TextField';
import { formatMeetingDate } from '@/utils';

interface TimeSectionProps extends GroupDetailResponse {}

export default function TimeSection({ meetDate, startTime }: TimeSectionProps) {
  const { t } = useTranslation('groupDetail');

  return (
    <section className="p-20 pb-8">
      <p className="text-subtitle-3 text-sign-secondary pl-4">{t('details.meetDate')}</p>
      <Spacing size={4} />
      <TextField
        value={formatMeetingDate(meetDate, startTime)}
        className="text-paragraph-2"
        readOnly
      />
    </section>
  );
}
