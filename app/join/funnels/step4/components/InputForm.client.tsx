'use client';
import BirthdaySection from './BirthdaySection.client';
import GenderSection from './GenderSection.client';
import ImageSection from './ImageSection.client';
import NicknameSection from './NicknameSection.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useJoinContext } from '@/app/join/components/JoinContext';
import { BottomFixedButton } from '@/components/common/Button';

export default function InputForm() {
  const { getValues, handleSubmit } = useJoinContext();
  const { nextStep } = useFunnelContext();
  const isAllTyped = !!(
    getValues('nickname') &&
    getValues().birth.year &&
    getValues().birth.month &&
    getValues().birth.date &&
    getValues().gender
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
      <BottomFixedButton text={isAllTyped ? '완료' : '다음'} disabled={!isAllTyped} type="submit" />
    </form>
  );
}
