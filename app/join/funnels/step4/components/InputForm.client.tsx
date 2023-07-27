'use client';
import BirthdaySection from './BirthdaySection.client';
import GenderSection from './GenderSection.client';
import ImageSection from './ImageSection.client';
import NicknameSection from './NicknameSection.client';
import SubmitSection from './SubmitSection.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useJoinContext } from '@/app/join/components/JoinContext';

export default function InputForm() {
  const { getValues, handleSubmit } = useJoinContext();
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
    <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
      <ImageSection />
      <NicknameSection />
      <BirthdaySection />
      <GenderSection />
      <SubmitSection />
    </form>
  );
}
