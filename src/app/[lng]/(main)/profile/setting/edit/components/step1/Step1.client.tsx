import Step1Header from './Step1Header.client';
import Step1InputForm from './Step1InputForm.client';
import { Spacing } from '@/components/Spacing';

interface Step1Props {
  onNext: () => void;
}

export default function Step1({ onNext }: Step1Props) {
  return (
    <>
      <Step1Header />

      <Spacing size={20} />
      <Step1InputForm onNext={onNext} />
    </>
  );
}
