'use client';

import 'react-datepicker/dist/react-datepicker.css';

import { getMonth, getYear } from 'date-fns';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';

interface Props {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
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

const Calendar = ({ selectedDate, setSelectedDate }: Props) => {
  return (
    <DatePicker
      dateFormat="yyyy.MM.dd"
      formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
      minDate={new Date('2000-01-01')}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
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
            <span className="mr-5 text-18 font-700">{getYear(date)}</span>
            <span className="text-18 font-700">{MONTHS[getMonth(date)]}</span>
          </div>
          <div className="">
            <button
              type="button"
              onClick={decreaseMonth}
              className="mr-42 h-12 w-6"
              disabled={prevMonthButtonDisabled}
            >
              <Image src="/assets/left_arrow.svg" alt="arrow-icon" width={6} height={12} />
            </button>
            <button
              type="button"
              onClick={increaseMonth}
              className="h-12 w-6"
              disabled={nextMonthButtonDisabled}
            >
              <Image src="/assets/right_arrow.svg" alt="arrow-icon" width={6} height={12} />
            </button>
          </div>
        </div>
      )}
    />
  );
};

export default Calendar;
