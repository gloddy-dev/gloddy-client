import CheckboxSection from './components/CheckboxSection.server';
import InputForm from './components/InputForm.client';
import AuthTitleTextMessage from '../AuthTitleTextMessage.server';
import { Spacing } from '@/components/common/Spacing';

interface Step1ComponentProps {
  onNextClick: () => void;
}

export default function Step1Component({ onNextClick }: Step1ComponentProps) {
  return (
    <main>
      <AuthTitleTextMessage text={`휴대폰 번호를\n인증해주세요`} />
      <InputForm onNextClick={onNextClick} />
      <Spacing size={18} />
      <CheckboxSection />
    </main>
  );
}
