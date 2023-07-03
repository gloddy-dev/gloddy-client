import date from '@/utils/date';

import SwipePicker from './SwipePicker';

const { todayYear, todayMonth, todayDate } = date.getToday();

const yearList = Array.from({ length: 100 }, (_, i) => todayYear - i + '년');
const monthList = Array.from({ length: 12 }, (_, i) => i + 1 + '월');
const dateList = Array.from({ length: 31 }, (_, i) => i + 1 + '일');

export default function DateSwipePicker() {
  return (
    <div className="flex relative">
      <SwipePicker selectList={yearList} isFirst />
      <SwipePicker selectList={monthList} />
      <SwipePicker selectList={dateList} isLast />
    </div>
  );
}
