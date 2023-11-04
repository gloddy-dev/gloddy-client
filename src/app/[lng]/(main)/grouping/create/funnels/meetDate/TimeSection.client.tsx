'use client';
import { useTranslation } from '@/app/i18n/client';
import { Flex } from '@/components/Layout';
import { SegmentGroup } from '@/components/SegmentGroup';
import { Spacing } from '@/components/Spacing';
import { TextField } from '@/components/TextField';
import { Control, useController } from 'react-hook-form';

import type { CreateGroupContextValue } from '../../type';

interface TimeSectionProps {
  control: Control<CreateGroupContextValue>;
}

export default function TimeSection({ control }: TimeSectionProps) {
  const { t } = useTranslation('grouping');
  const { field: time } = useController({
    name: 'time',
    control,
    rules: {
      required: true,
    },
  });

  const handleTimeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    min: number,
    max: number,
    field: string
  ) => {
    const t = e.target as HTMLInputElement;
    const value = t.value;

    if (/[^0-9]/g.test(value)) {
      return;
    }

    const isValueValid = Number(value) <= max && Number(value) >= min;

    if (!isValueValid) {
      const last = value.slice(-1);
      if (last === '0' && min > 0) {
        time.onChange({ ...time.value, [field]: '' });
        return;
      }

      time.onChange({ ...time.value, [field]: '0' + last });
      return;
    }

    if (value.length === 1) {
      time.onChange({ ...time.value, [field]: '0' + value });
      return;
    }

    if (value.length === 3) {
      time.onChange({ ...time.value, [field]: value.slice(1) });
      return;
    }
  };

  return (
    <section className="p-20">
      <p className="pl-4 text-subtitle-3 text-sign-secondary">{t('create.time.label')}</p>
      <Spacing size={8} />
      <Flex align="center" className="flex-auto">
        <SegmentGroup
          selectedValue={time.value.fromAmPm}
          onChange={(value) => time.onChange({ ...time.value, fromAmPm: value })}
          className="shrink-0"
        >
          <SegmentGroup.Segment label={t('create.time.am')} value="AM" />
          <SegmentGroup.Segment label={t('create.time.pm')} value="PM" />
        </SegmentGroup>
        <Spacing direction="horizontal" size={8} />

        <div className="flex-1">
          <TextField
            as="input"
            type="tel"
            placeholder={t('create.time.hour')}
            value={time.value.fromHour}
            onChange={(e) =>
              handleTimeChange(e as React.ChangeEvent<HTMLInputElement>, 1, 12, 'fromHour')
            }
            maxLength={2}
          />
        </div>
        <Spacing direction="horizontal" size={4} />
        <p className="text-subtitle-2 text-sign-secondary">:</p>
        <Spacing direction="horizontal" size={4} />
        <div className="flex-1">
          <TextField
            as="input"
            type="tel"
            placeholder={t('create.time.minute')}
            value={time.value.fromMin}
            onChange={(e) =>
              handleTimeChange(e as React.ChangeEvent<HTMLInputElement>, 0, 59, 'fromMin')
            }
            maxLength={2}
          />
        </div>
      </Flex>
    </section>
  );
}
