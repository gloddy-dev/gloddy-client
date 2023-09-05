import 'react-datepicker/dist/react-datepicker.css';

import { Icon } from '../Icon';
import { Spacing } from '../Spacing';
import { Flex } from '@/components/Layout';
import { getMonth, getYear } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import { useEffect, useMemo } from 'react';
import DatePicker from 'react-datepicker';

import { IconButton } from '@/components/Button';

interface CalendarProps {
  dateValue: Date | null;
  setDateValue: (date: Date) => void;
}

export default function Calendar({ dateValue, setDateValue }: CalendarProps) {
  const currentDate = useMemo(() => new Date(), []);

  useEffect(() => {
    if (!dateValue) {
      setDateValue(currentDate);
    }
  }, [dateValue, setDateValue, currentDate]);

  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy-MM-dd"
      formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
      minDate={currentDate}
      filterDate={(date) => date > currentDate}
      selected={dateValue}
      onChange={(date: Date) => setDateValue(date)}
      inline
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <Flex align="center">
          <p className="text-subtitle-1">
            {getYear(date)}년 {getMonth(date)}월
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
