import SwipePicker from './SwipePicker';
import { useState } from 'react';

const hourList = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
const minuteList = Array.from({ length: 60 }, (_, i) => (i > 9 ? `${i}` : `0${i}`));
const ampmList = ['AM', 'PM'];

interface TimeSwiperPickerProps {
  fromHour: string;
  fromMin: string;
  fromAmPm: string;
  toHour: string;
  toMin: string;
  toAmPm: string;
}

export default function TimeSwipePicker() {
  const [timeRange, setTimeRange] = useState<TimeSwiperPickerProps>({
    fromHour: '1',
    fromMin: '00',
    fromAmPm: 'AM',
    toHour: '1',
    toMin: '00',
    toAmPm: 'AM',
  });

  const setValueByKeyType = (value: string | number, keyType: string) => {
    setTimeRange({
      ...timeRange,
      [keyType]: value,
    });
  };

  console.log(timeRange);

  return (
    <div className="flex h-125 w-full">
      <SwipePicker
        selectList={hourList}
        initialValue={timeRange.fromHour}
        keyType={'fromHour'}
        setValue={setValueByKeyType}
        isFirst
      />
      <SwipePicker selectList={[':']} />
      <SwipePicker
        selectList={minuteList}
        keyType={'fromMin'}
        initialValue={timeRange.fromMin}
        setValue={setValueByKeyType}
      />
      <SwipePicker
        selectList={ampmList}
        initialValue={timeRange.fromAmPm}
        keyType={'fromAmPm'}
        isTimeZone={true}
        setValue={setValueByKeyType}
      />
      <SwipePicker selectList={['부터']} isRangeString={true} />
      <SwipePicker
        selectList={hourList}
        keyType={'toHour'}
        initialValue={timeRange.toHour}
        setValue={setValueByKeyType}
      />
      <SwipePicker selectList={[':']} />
      <SwipePicker
        selectList={minuteList}
        keyType={'toMin'}
        initialValue={timeRange.toMin}
        setValue={setValueByKeyType}
      />
      <SwipePicker
        selectList={ampmList}
        initialValue={timeRange.toAmPm}
        keyType={'toAmPm'}
        isTimeZone={true}
        setValue={setValueByKeyType}
      />
      <SwipePicker selectList={['까지']} isRangeString={true} isLast />
    </div>
  );
}

// 2022. 04. 27. FRI  7PM - 9PM
