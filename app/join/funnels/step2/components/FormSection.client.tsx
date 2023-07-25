import EmailForm from './EmailForm.client';
import { useJoinContext } from '../../../components/JoinContext';
import { useFunnelContext } from '../../JoinFunnel';
import { BottomFixedButton } from '@/components/common/Button';

export default function FormSection() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useJoinContext();
  const { nextStep } = useFunnelContext();

  return (
    <section>
      <EmailForm />
      <BottomFixedButton
        text="완료"
        type="submit"
        disabled={!watch('schoolInfo.school')}
        onSubmit={handleSubmit(nextStep)}
      />
    </section>
  );
}
