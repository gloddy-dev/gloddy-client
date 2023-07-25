'use client';
import { BottomFixedButton } from '@/components/common/Button';
import useJoinStore from '@/store/useJoinStore';

export default function NextButtonSection() {
  // TODO: profile Image 추가 필요
  const { name, birth, gender } = useJoinStore();
  const isAllEntered = birth.year && birth.month && birth.date && name && gender;
  console.log(1);

  return (
    <BottomFixedButton
      text={isAllEntered ? '완료' : '다음'}
      disabled={!isAllEntered}
      href="/join/step5"
    />
  );
}
