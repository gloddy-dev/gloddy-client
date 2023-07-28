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
  return (
    <div className="relative flex h-180">
      <SwipePicker.Bar />
      <SwipePicker
        selectList={hourList}
        value={timeValue.fromHour}
        setValue={(value: number) => setTimeValue({ ...timeValue, fromHour: value })}
      />
      <SwipePicker.Middle>:</SwipePicker.Middle>
      <SwipePicker
        selectList={minuteList}
        value={timeValue.fromMin}
        setValue={(value: number) => setTimeValue({ ...timeValue, fromMin: value })}
      />
      <SwipePicker
        selectList={ampmList}
        value={timeValue.fromAmPm}
        setValue={(value: number) => setTimeValue({ ...timeValue, fromAmPm: value })}
      />
      <SwipePicker.Middle>부터</SwipePicker.Middle>
      <SwipePicker
        selectList={hourList}
        value={timeValue.toHour}
        setValue={(value: number) => setTimeValue({ ...timeValue, toHour: value })}
      />
      <SwipePicker.Middle>:</SwipePicker.Middle>
      <SwipePicker
        selectList={minuteList}
        value={timeValue.toMin}
        setValue={(value: number) => setTimeValue({ ...timeValue, toMin: value })}
      />
      <SwipePicker
        selectList={ampmList}
        value={timeValue.toAmPm}
        setValue={(value: number) => setTimeValue({ ...timeValue, toAmPm: value })}
      />
      <SwipePicker.Middle>까지</SwipePicker.Middle>
    </div>
  );
}
