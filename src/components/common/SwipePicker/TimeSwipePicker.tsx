import SwipePicker from './SwipePicker';

import type { AMPMType, TimeType } from '@/types';

const hourList: string[] = Array.from({ length: 12 }, (_, i) => String(i + 1));
const minuteList: string[] = Array.from({ length: 60 }, (_, i) => String(i > 9 ? i : '0' + i));
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
        setValue={(value: string) =>
          setTimeValue({ ...timeValue, fromHour: value.padStart(2, '0') })
        }
      />
      <SwipePicker.MiddleText>:</SwipePicker.MiddleText>
      <SwipePicker
        selectList={minuteList}
        value={timeValue.fromMin}
        setValue={(value: string) =>
          setTimeValue({ ...timeValue, fromMin: value.padStart(2, '0') })
        }
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
        setValue={(value: string) => setTimeValue({ ...timeValue, toHour: value.padStart(2, '0') })}
      />
      <SwipePicker.MiddleText>:</SwipePicker.MiddleText>
      <SwipePicker
        selectList={minuteList}
        value={timeValue.toMin}
        setValue={(value: string) => setTimeValue({ ...timeValue, toMin: value.padStart(2, '0') })}
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
