'use client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { BottomFixedButton } from '@/components/common/Button';

export default function SubmitSection() {
  const {
    handleSubmit,
    formState: { isDirty },
  } = useJoinContext();
  const { nextStep } = useFunnelContext();

  const onClick = () => {
    nextStep();
  };

  return (
    <BottomFixedButton
      text="완료"
      type="submit"
      disabled={!isDirty}
      onClick={handleSubmit(onClick)}
    />
  );
}
