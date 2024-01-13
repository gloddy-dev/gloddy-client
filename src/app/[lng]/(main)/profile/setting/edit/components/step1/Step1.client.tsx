import Step1Header from './Step1Header.client';
import Step1InputForm from './Step1InputForm.client';
import { Spacing } from '@/components/Spacing';

export interface Step1Props {
  onPrev: () => void;
}

export default function Step1({ onPrev }: Step1Props) {
  return (
    <>
      <Step1Header />
      <Spacing size={20} />
      <Step1InputForm onPrev={onPrev} />
    </>
  );
}
