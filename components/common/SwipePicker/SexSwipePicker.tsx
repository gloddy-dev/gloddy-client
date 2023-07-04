import SwipePicker from './SwipePicker';

const selectList = ['남성', '여성'];

interface SexSwipePickerProps {
  sexValue: string;
  setSexValue: (value: string) => void;
}

export default function SexSwipePicker({ sexValue, setSexValue }: SexSwipePickerProps) {
  return (
    <div className="flex relative h-180">
      <SwipePicker
        isFirst
        isLast
        selectList={selectList}
        setValue={(value: number) => setSexValue(selectList[value])}
        initialValue={sexValue}
      />
    </div>
  );
}
