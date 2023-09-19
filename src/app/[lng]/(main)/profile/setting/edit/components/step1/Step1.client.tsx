import Step1Header from './Step1Header.client';
import Step1InputForm from './Step1InputForm.client';
import { PageAnimation } from '@/components/PageAnimation';
import { Spacing } from '@/components/Spacing';

interface Step1Props {
  onNext: () => void;
}

export default function Step1({ onNext }: Step1Props) {
  return (
    <>
      <Step1Header />
      <PageAnimation>
        <Spacing size={20} />
        <Step1InputForm onNext={onNext} />
      </PageAnimation>
    </>
  );
}
