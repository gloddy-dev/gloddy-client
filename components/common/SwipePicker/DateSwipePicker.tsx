import type { BirthdayValueType } from '@/types/date';
import getDate from '@/utils/date';

import SwipePicker from './SwipePicker';

const { todayYear } = getDate.today();

const yearList = Array.from({ length: 100 }, (_, i) => todayYear - i + '년');
const monthList = Array.from({ length: 12 }, (_, i) => i + 1 + '월');
const dateList = Array.from({ length: 31 }, (_, i) => i + 1 + '일');

interface DateSwipePickerProps {
  birthdayValue: BirthdayValueType;
  setBirthdayValue: (args: BirthdayValueType) => void;
}

export default function DateSwipePicker({ birthdayValue, setBirthdayValue }: DateSwipePickerProps) {
  const setValueByKeyType = (value: string | number, keyType: string) => {
    setBirthdayValue({
      ...birthdayValue,
      [keyType]: value,
    });
  };

  return (
    <div className="relative flex h-180">
      <SwipePicker
        selectList={yearList}
        isFirst
        setValue={setValueByKeyType}
        initialValue={birthdayValue.year}
        keyType={'year'}
      />
      <SwipePicker
        selectList={monthList}
        setValue={setValueByKeyType}
        initialValue={birthdayValue.month}
        keyType={'month'}
      />
      <SwipePicker
        selectList={dateList}
        isLast
        setValue={setValueByKeyType}
        initialValue={birthdayValue.date}
        keyType={'date'}
      />
    </div>
  );
}
