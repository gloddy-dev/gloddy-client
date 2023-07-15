import SwipePicker from './SwipePicker';

import type { TimeType } from '@/types';

const hourList = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
const minuteList = Array.from({ length: 60 }, (_, i) => (i > 9 ? `${i}` : `0${i}`));
const ampmList = ['AM', 'PM'];

interface TimeSwipePickerProps {
  timeValue: TimeType;
  setTimeValue: (time: TimeType) => void;
}

export default function TimeSwipePicker({ timeValue, setTimeValue }: TimeSwipePickerProps) {
  const setValueByKeyType = (value: string | number, keyType: string) => {
    setTimeValue({
      ...timeValue,
      [keyType]: value,
    });
  };

  return (
    <div className="flex h-125 ">
      <SwipePicker
        selectList={hourList}
        value={timeValue.fromHour}
        keyType="fromHour"
        setValue={setValueByKeyType}
        isFirst
      />
      <SwipePicker selectList={[':']} />
      <SwipePicker
        selectList={minuteList}
        keyType="fromMin"
        value={timeValue.fromMin}
        setValue={setValueByKeyType}
      />
      <SwipePicker
        selectList={ampmList}
        value={timeValue.fromAmPm}
        keyType="fromAmPm"
        isTimeZone={true}
        setValue={setValueByKeyType}
      />
      <SwipePicker selectList={['부터']} isRangeString={true} />
      <SwipePicker
        selectList={hourList}
        keyType="toHour"
        value={timeValue.toHour}
        setValue={setValueByKeyType}
      />
      <SwipePicker selectList={[':']} />
      <SwipePicker
        selectList={minuteList}
        keyType="toMin"
        value={timeValue.toMin}
        setValue={setValueByKeyType}
      />
      <SwipePicker
        selectList={ampmList}
        value={timeValue.toAmPm}
        keyType="toAmPm"
        isTimeZone={true}
        setValue={setValueByKeyType}
      />
      <SwipePicker selectList={['까지']} isRangeString={true} isLast />
    </div>
  );
}
