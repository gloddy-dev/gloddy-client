import SwipePicker from './SwipePicker';
import { GenderType } from '@/types';

const selectList = ['남성', '여성'];

interface GenderSwipePickerProps {
  setGenderValue: (value: GenderType) => void;
  genderValue: string;
}

export default function GenderSwipePicker({ genderValue, setGenderValue }: GenderSwipePickerProps) {
  const setValueByKey = (value: GenderType) => {
    setGenderValue(value);
  };
  return (
    <div className="relative flex h-180">
      <SwipePicker
        isFirst
        isLast
        selectList={selectList}
        setValue={setValueByKey}
        value={genderValue}
      />
    </div>
  );
}
