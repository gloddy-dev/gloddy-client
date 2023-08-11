import 'react-datepicker/dist/react-datepicker.css';

import { getMonth, getYear } from 'date-fns';
import Image from 'next/image';
import DatePicker from 'react-datepicker';

interface Props {
  dateValue: Date | null;
  setDateValue: (date: Date) => void;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function Calendar({ dateValue, setDateValue }: Props) {
  return (
    <DatePicker
      dateFormat="yyyy.MM.dd"
      formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
      minDate={new Date('2000-01-01')}
      selected={dateValue}
      onChange={(date: Date) => setDateValue(date)}
      inline
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="mb-8 flex w-full justify-between px-8">
          <div>
            <span className="font-700 mr-5 text-18">{getYear(date)}</span>
            <span className="font-700 text-18">{MONTHS[getMonth(date)]}</span>
          </div>
          <div className="">
            <button
              type="button"
              onClick={decreaseMonth}
              className="mr-42 h-12 w-6"
              disabled={prevMonthButtonDisabled}
            >
              <Image src="/assets/arrow_left.svg" alt="arrow-icon" width={6} height={12} />
            </button>
            <button
              type="button"
              onClick={increaseMonth}
              className="h-12 w-6"
              disabled={nextMonthButtonDisabled}
            >
              <Image src="/assets/arrow_right.svg" alt="arrow-icon" width={6} height={12} />
            </button>
          </div>
        </div>
      )}
    />
  );
}
