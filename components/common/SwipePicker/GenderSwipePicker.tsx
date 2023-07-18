import SwipePicker from './SwipePicker';
import { GenderType } from '@/types';

const selectList = ['남성', '여성'];

interface GenderSwipePickerProps {
  setGenderValue: (value: GenderType) => void;
  genderValue: GenderType;
}

export default function GenderSwipePicker({ genderValue, setGenderValue }: GenderSwipePickerProps) {
  const setValue = (value: string, keyType: string) => {
    setGenderValue(genderValue);
  };

  return (
    <div className="relative flex h-180">
      <SwipePicker
        isFirst
        isLast
        selectList={selectList}
        setValue={setValue}
        keyType="gender"
        value={genderValue}
      />
    </div>
  );
}
