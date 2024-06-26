'use client';
import { type Control, useController } from 'react-hook-form';

import type { CreateGroupContextValue } from '../../type';

import { Calendar } from '@/components/Calendar';

interface CalendarSectionProps {
  control: Control<CreateGroupContextValue>;
}

export default function CalendarSection({ control }: CalendarSectionProps) {
  const { field: meetDate } = useController({
    name: 'meetDate',
    control,
    rules: {
      required: true,
    },
  });

  return (
    <section className="px-20 pb-20 pt-8">
      <Calendar dateValue={meetDate.value} setDateValue={(date: Date) => meetDate.onChange(date)} />
    </section>
  );
}
