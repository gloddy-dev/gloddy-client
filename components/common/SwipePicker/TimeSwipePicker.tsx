import SwipePicker from './SwipePicker';

import type { AMPMType, TimeType } from '@/types';

const hourList: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
const minuteList: number[] = Array.from({ length: 60 }, (_, i) => (i > 9 ? i : i));
const ampmList: AMPMType[] = ['AM', 'PM'];

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
      <SwipePicker.MiddleText>:</SwipePicker.MiddleText>
      <SwipePicker
        selectList={minuteList}
        value={timeValue.fromMin}
        setValue={(value: number) => setTimeValue({ ...timeValue, fromMin: value })}
      />
      <SwipePicker
        selectList={ampmList}
        value={timeValue.fromAmPm}
        setValue={(value: AMPMType) => setTimeValue({ ...timeValue, fromAmPm: value })}
      />
      <SwipePicker.MiddleText>부터</SwipePicker.MiddleText>
      <SwipePicker
        selectList={hourList}
        value={timeValue.toHour}
        setValue={(value: number) => setTimeValue({ ...timeValue, toHour: value })}
      />
      <SwipePicker.MiddleText>:</SwipePicker.MiddleText>
      <SwipePicker
        selectList={minuteList}
        value={timeValue.toMin}
        setValue={(value: number) => setTimeValue({ ...timeValue, toMin: value })}
      />
      <SwipePicker
        selectList={ampmList}
        value={timeValue.toAmPm}
        setValue={(value: AMPMType) => setTimeValue({ ...timeValue, toAmPm: value })}
      />
      <SwipePicker.MiddleText>까지</SwipePicker.MiddleText>
    </div>
  );
}
