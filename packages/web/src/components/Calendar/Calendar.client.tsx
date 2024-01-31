import 'react-datepicker/dist/react-datepicker.css';

import { Icon } from '../Icon';
import { Spacing } from '../Spacing';
import { IconButton } from '@/components/Button';
import { Flex } from '@/components/Layout';
import { format } from 'date-fns';
import { enUS, ko } from 'date-fns/esm/locale';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import DatePicker from 'react-datepicker';

interface CalendarProps {
  dateValue: Date | null;
  setDateValue: (date: Date) => void;
}

export default function Calendar({ dateValue, setDateValue }: CalendarProps) {
  const { lng } = useParams();
  const currentDate = useMemo(() => new Date(), []);
  const yesterdayDate = useMemo(
    () => new Date(currentDate.setDate(currentDate.getDate() - 1)),
    [currentDate]
  );

  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy-MM-dd"
      formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
      minDate={currentDate}
      filterDate={(date) => date > yesterdayDate}
      selected={dateValue}
      onChange={(date: Date) => setDateValue(date)}
      inline
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <Flex align="center">
          <p className="text-subtitle-1">
            {lng === 'ko'
              ? format(date, 'yyyy년 MM월', { locale: ko })
              : format(date, 'MMMM yyyy', { locale: enUS })}
          </p>
          <Spacing size={0} className="grow" />
          <IconButton size="medium" onClick={decreaseMonth}>
            <Icon id="24-navigate_before" />
          </IconButton>
          <IconButton size="medium" onClick={increaseMonth}>
            <Icon id="24-navigate_next" />
          </IconButton>
        </Flex>
      )}
    />
  );
}
