import { BirthdayValueType } from '@/@types/date';
import date from '@/utils/date';

import SwipePicker from './SwipePicker';

const { todayYear, todayMonth, todayDate } = date.getToday();

const yearList = Array.from({ length: 100 }, (_, i) => todayYear - i + '년');
const monthList = Array.from({ length: 12 }, (_, i) => i + 1 + '월');
const dateList = Array.from({ length: 31 }, (_, i) => i + 1 + '일');

interface DateSwipePickerProps {
  birthdayValue: BirthdayValueType;
  setBirthdayValue: (args: BirthdayValueType) => void;
}

export default function DateSwipePicker({ birthdayValue, setBirthdayValue }: DateSwipePickerProps) {
  const setYearValue = (value: number) => {
    setBirthdayValue({
      ...birthdayValue,
      year: yearList[value],
    });
  };
  const setMonthValue = (value: number) => {
    setBirthdayValue({
      ...birthdayValue,
      month: monthList[value],
    });
  };
  const setDateValue = (value: number) => {
    setBirthdayValue({
      ...birthdayValue,
      date: dateList[value],
    });
  };
  return (
    <div className="flex relative h-180">
      <SwipePicker
        selectList={yearList}
        isFirst
        setValue={setYearValue}
        initialValue={birthdayValue.year}
      />
      <SwipePicker
        selectList={monthList}
        setValue={setMonthValue}
        initialValue={birthdayValue.month}
      />
      <SwipePicker
        selectList={dateList}
        isLast
        setValue={setDateValue}
        initialValue={birthdayValue.date}
      />
    </div>
  );
}
