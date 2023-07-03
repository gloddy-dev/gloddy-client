import SwipePicker from './SwipePicker';

const hourList = Array.from({ length: 12 }, (_, i) => i + 1);
const minuteList = Array.from({ length: 60 }, (_, i) => (i > 9 ? `${i}` : `0${i}`));
const ampmList = ['AM', 'PM'];

export default function TimeSwipePicker() {
  return (
    <div className="flex w-full h-125">
      <SwipePicker selectList={hourList} isFirst />
      <SwipePicker selectList={[':']} />
      <SwipePicker selectList={minuteList} />
      <SwipePicker selectList={ampmList} isTimeZone={true} />
      <SwipePicker selectList={['부터']} isRangeString={true} />
      <SwipePicker selectList={hourList} />
      <SwipePicker selectList={[':']} />
      <SwipePicker selectList={minuteList} />
      <SwipePicker selectList={ampmList} isTimeZone={true} />
      <SwipePicker selectList={['까지']} isRangeString={true} isLast />
    </div>
  );
}
