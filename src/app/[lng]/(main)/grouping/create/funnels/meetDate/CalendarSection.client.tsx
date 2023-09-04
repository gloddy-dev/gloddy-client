'use client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import Calendar from '@/components/Calendar/Calendar';

export default function CalendarSection() {
  const { watch, setValue } = useCreateGroupContext();

  return (
    <section className="px-20 pb-20 pt-8">
      <Calendar
        dateValue={watch('meetDate')}
        setDateValue={(date: Date) => setValue('meetDate', date, { shouldDirty: true })}
      />
    </section>
  );
}
