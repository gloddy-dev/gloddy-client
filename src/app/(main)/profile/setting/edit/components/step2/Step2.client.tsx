import Step2Header from './Step2Header';
import Step2InputForm from './Step2InputForm.client';
import { PageAnimation } from '@/components/PageAnimation';
import { Spacing } from '@/components/Spacing';

interface Step2Props {
  onPrev: () => void;
}

export default function Step2({ onPrev }: Step2Props) {
  return (
    <>
      <Step2Header onClose={onPrev} />
      <PageAnimation>
        <div className="px-20 pb-16 pt-32 text-h3 text-sign-cto">
          사용자님의 성격을
          <br />
          선택해주세요!
        </div>
        <p className="px-20 text-subtitle-2 text-sign-tertiary">3개를 선택해주세요.</p>
        <Spacing size={16} />
        <Step2InputForm onPrevClick={onPrev} />
      </PageAnimation>
    </>
  );
}
