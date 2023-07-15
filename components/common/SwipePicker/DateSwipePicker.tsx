import SwipePicker from './SwipePicker';
import getDate from '@/utils/date';

import type { BirthdayValueType } from '@/types';

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
        keyType={'year'}
        initialValue={birthdayValue.year}
      />
      <SwipePicker
        selectList={monthList}
        setValue={setValueByKeyType}
        keyType={'month'}
        initialValue={birthdayValue.month}
      />
      <SwipePicker
        selectList={dateList}
        isLast
        setValue={setValueByKeyType}
        keyType={'date'}
        initialValue={birthdayValue.date}
      />
    </div>
  );
}
