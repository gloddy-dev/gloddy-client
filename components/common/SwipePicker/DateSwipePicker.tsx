'use client';
import SwipePicker from './SwipePicker';
import getDate from '@/utils/date';

import type { DateType } from '@/types';

// 상수화
const { todayYear } = getDate.today();
const YEAR_COUNT = 100;
const MONTH_COUNT = 12;
const DATE_COUNT = 31;

const yearList = Array.from({ length: YEAR_COUNT }, (_, i) => todayYear - i + '년');
const monthList = Array.from({ length: MONTH_COUNT }, (_, i) => i + 1 + '월');
const dateList = Array.from({ length: DATE_COUNT }, (_, i) => i + 1 + '일');

interface DateSwipePickerProps {
  dateValue: DateType;
  setDateValue: (props: DateType) => void;
}

export default function DateSwipePicker({ dateValue, setDateValue }: DateSwipePickerProps) {
  return (
    <div className="relative flex h-180">
      <SwipePicker
        selectList={yearList}
        isFirst
        setValue={(value) => setDateValue({ ...dateValue, year: value })}
      />
      <SwipePicker
        selectList={monthList}
        setValue={(value) => setDateValue({ ...dateValue, month: value })}
      />
      <SwipePicker
        selectList={dateList}
        isLast
        setValue={(value) => setDateValue({ ...dateValue, date: value })}
      />
    </div>
  );
}
