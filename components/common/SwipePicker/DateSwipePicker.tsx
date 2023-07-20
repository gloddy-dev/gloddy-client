import SwipePicker from './SwipePicker';
import getDate from '@/utils/date';

import type { BirthdayValueType } from '@/types';

// 상수화
const { todayYear } = getDate.today();
const YEAR_COUNT = 100;
const MONTH_COUNT = 12;
const DATE_COUNT = 31;

const yearList = Array.from({ length: YEAR_COUNT }, (_, i) => todayYear - i + '년');
const monthList = Array.from({ length: MONTH_COUNT }, (_, i) => i + 1 + '월');
const dateList = Array.from({ length: DATE_COUNT }, (_, i) => i + 1 + '일');

interface DateSwipePickerProps {
  birthdayValue: BirthdayValueType;
  setBirthdayValue: (args: BirthdayValueType) => void;
}

export default function DateSwipePicker({ birthdayValue, setBirthdayValue }: DateSwipePickerProps) {
  // 함수 분리
  const setValue = (value: string, keyType: string) => {
    const newBirthdayValue = { ...birthdayValue, [keyType]: value };
    setBirthdayValue(newBirthdayValue);
  };

  return (
    <div className="relative flex h-180">
      <SwipePicker
        selectList={yearList}
        isFirst
        setValue={setValue}
        keyType="year"
        value={birthdayValue.year}
      />
      <SwipePicker
        selectList={monthList}
        setValue={setValue}
        keyType="month"
        value={birthdayValue.month}
      />
      <SwipePicker
        selectList={dateList}
        isLast
        setValue={setValue}
        keyType="date"
        value={birthdayValue.date}
      />
    </div>
  );
}
