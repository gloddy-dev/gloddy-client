import CheckboxSection from './components/CheckboxSection.server';
import FormSection from './components/FormSection.client';
import AuthTitleTextMessage from '../JoinTitleTextMessage.server';
import { Spacing } from '@/components/common/Spacing';

export default function Step1Component() {
  return (
    <main>
      <AuthTitleTextMessage text={`휴대폰 번호를\n인증해주세요`} />
      <FormSection />
      <Spacing size={18} />
      <CheckboxSection />
    </main>
  );
}
