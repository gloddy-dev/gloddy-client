import 'react-datepicker/dist/react-datepicker.css';

import { Spacing } from '../common/Spacing';
import { IconButton } from '@/components/Button';
import { Flex } from '@/components/Layout';
import { getMonth, getYear } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import Image from 'next/image';
import DatePicker from 'react-datepicker';

interface CalendarProps {
  dateValue: Date | null;
  setDateValue: (date: Date) => void;
}

export default function Calendar({ dateValue, setDateValue }: CalendarProps) {
  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy-MM-dd"
      formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
      minDate={new Date()}
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
            <Image
              src="/icons/24/navigate_before.svg"
              alt="navigate_before"
              width={24}
              height={24}
            />
          </IconButton>
          <IconButton size="medium" onClick={increaseMonth}>
            <Image src="/icons/24/navigate_next.svg" alt="navigate_next" width={24} height={24} />
          </IconButton>
        </Flex>
      )}
    />
  );
}
