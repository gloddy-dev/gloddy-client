import SwipePicker from './SwipePicker';

const selectList = ['남성', '여성'];

interface SexSwipePickerProps {
  setSexValue: (value: string) => void;
  sexValue: string;
}

export default function SexSwipePicker({ sexValue, setSexValue }: SexSwipePickerProps) {
  const setValueByKey = (value: string) => {
    setSexValue(value);
  };
  return (
    <div className="relative flex h-180">
      <SwipePicker
        isFirst
        isLast
        selectList={selectList}
        setValue={setValueByKey}
        initialValue={sexValue}
      />
    </div>
  );
}
