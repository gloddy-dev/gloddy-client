import SwipePicker from './SwipePicker';

interface GenderSwipePickerProps<T = '남성' | '여성'> {
  setGenderValue: (value: T) => void;
  genderValue: T;
}

export default function GenderSwipePicker({ genderValue, setGenderValue }: GenderSwipePickerProps) {
  return (
    <div className="relative flex h-180">
      <SwipePicker.Bar />
      <SwipePicker selectList={['남성', '여성']} setValue={setGenderValue} value={genderValue} />
    </div>
  );
}
