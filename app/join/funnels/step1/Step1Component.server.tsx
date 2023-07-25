import CheckboxSection from './components/CheckboxSection.server';
import FormSection from './components/FormSection.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.server';
import { Spacing } from '@/components/common/Spacing';

export default function Step1Component() {
  return (
    <main>
      <JoinTitleTextMessage text={`휴대폰 번호를\n인증해주세요`} />
      <FormSection />
      <Spacing size={18} />
      <CheckboxSection />
    </main>
  );
}
