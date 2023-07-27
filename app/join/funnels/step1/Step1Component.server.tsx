import CheckboxSection from './components/CheckboxSection.server';
import InputForm from './components/InputForm.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.server';
import { Spacing } from '@/components/common/Spacing';

export default function Step1Component() {
  return (
    <main>
      <JoinTitleTextMessage>
        휴대폰 번호를
        <br />
        인증해주세요
      </JoinTitleTextMessage>
      <InputForm />
      <Spacing size={18} />
      <CheckboxSection />
    </main>
  );
}
