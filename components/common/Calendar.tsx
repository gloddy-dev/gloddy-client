'use client';
import { getMonth, getYear } from 'date-fns';
import { Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}

const YEARS = Array.from(
  { length: getYear(new Date()) + 1 - 2000 },
  (_, i) => getYear(new Date()) - i
);
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
    <div className={'datePickerWrapper'}>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
        showYearDropdown
        scrollableYearDropdown
        shouldCloseOnSelect
        yearDropdownItemNumber={100}
        minDate={new Date('2000-01-01')}
        maxDate={new Date()}
        selected={selectedDate}
        calendarClassName={'calenderWrapper'}
        dayClassName={(d) =>
          d.getDate() === selectedDate!.getDate() ? 'selectedDay' : 'unselectedDay'
        }
        onChange={(date) => setSelectedDate(date)}
        className={'datePicker'}
        renderCustomHeader={({
          date,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={'customHeaderContainer'}>
            <div>
              <span className={'month'}>{MONTHS[getMonth(date)]}</span>
              <select
                value={getYear(date)}
                className={'year'}
                onChange={({ target: { value } }) => changeYear(Number(value))}
              >
                {YEARS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                type="button"
                onClick={decreaseMonth}
                className={'monthButton'}
                disabled={prevMonthButtonDisabled}
              ></button>
              <button
                type="button"
                onClick={increaseMonth}
                className={'monthButton'}
                disabled={nextMonthButtonDisabled}
              ></button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Calendar;
