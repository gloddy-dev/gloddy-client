'use client';
import BirthdaySection from './BirthdaySection.client';
import GenderSection from './GenderSection.client';
import ImageSection from './ImageSection.client';
import NicknameSection from './NicknameSection.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useJoinContext } from '@/app/join/components/JoinContext';
import { SignUpState } from '@/app/join/type';
import { BottomFixedButton } from '@/components/common/Button';

export default function InputForm() {
  const {
    watch,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useJoinContext();
  const { nextStep } = useFunnelContext();
  const isAllTyped = !!(
    watch('nickname') &&
    watch('birth').year &&
    watch('birth').month &&
    watch('birth').date &&
    watch('gender')
  );
  const onSubmit = () => {
    if (!isAllTyped) return;
    nextStep();
  };

  return (
    <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
      <ImageSection />
      <NicknameSection />
      <BirthdaySection />
      <GenderSection />
      <BottomFixedButton disabled={!isAllTyped} text={isAllTyped ? '완료' : '다음'} type="submit" />
    </form>
  );
}
