import CheckboxSection from './components/CheckboxSection.server';
import InputForm from './components/InputForm.client';
import AuthTitleTextMessage from '../components/AuthTitleTextMessage.server';
import JoinTopNavigationBar from '../components/JoinTopNavigationBar.server';
import { Spacing } from '@/components/common/Spacing';

export default function Step1Page() {
  return (
    <div>
      <JoinTopNavigationBar />

      <AuthTitleTextMessage text={`휴대폰 번호를\n인증해주세요`} />

      <InputForm />

      <Spacing size={18} />

      <CheckboxSection />
    </div>
  );
}
