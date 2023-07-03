import SwipePicker from './SwipePicker';

const selectList = ['남성', '여성'];

export default function SexSwipePicker() {
  return (
    <div>
      <SwipePicker isFirst isLast selectList={selectList} />
    </div>
  );
}
