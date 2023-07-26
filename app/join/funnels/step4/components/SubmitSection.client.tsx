import { useFunnelContext } from '../../JoinFunnel';
import { useJoinContext } from '@/app/join/components/JoinContext';
import { BottomFixedButton } from '@/components/common/Button';

export default function SubmitSection() {
  const { watch, getValues } = useJoinContext();
  const { nextStep } = useFunnelContext();
  const onSubmit = () => {
    const isAllTyped = !!(
      getValues('nickname') &&
      getValues().birth.year &&
      getValues().birth.month &&
      getValues().birth.date &&
      getValues().gender
    );
    if (!isAllTyped) return;
    nextStep();
  };

  return (
    <BottomFixedButton
      text={watch('gender') ? '완료' : '다음'}
      disabled={!watch('gender')}
      onClick={onSubmit}
    />
  );
}
