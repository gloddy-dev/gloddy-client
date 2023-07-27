import { useJoinContext } from '@/app/join/components/JoinContext';
import { BottomFixedButton } from '@/components/common/Button';

export default function SubmitSection() {
  const { watch } = useJoinContext();

  return (
    <BottomFixedButton
      text={watch('gender') ? '완료' : '다음'}
      disabled={!watch('gender')}
      type="submit"
    />
  );
}
