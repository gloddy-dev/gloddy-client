import { BottomFixedButton } from '@/components/common/Button';
import useJoinStore from '@/store/useJoinStore';

interface NextButtonSectionProps {}
export default function NextButtonSection() {
  // TODO: profile Image 추가 필요
  const { name, birth, gender } = useJoinStore();
  const isAllEntered = birth.year && birth.month && birth.date && name && gender;

  return (
    <BottomFixedButton
      text={isAllEntered ? '완료' : '다음'}
      disabled={!isAllEntered}
      href="/join/step5"
    />
  );
}
