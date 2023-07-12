import Spacing from '@/components/common/Spacing';

import { AuthTitleTextMessage } from '../components/AuthTitleTextMessage';
import JoinTopNavigationBar from '../components/JoinTopNavigationBar';
import CheckboxSection from './components/CheckboxSection';
import InputForm from './components/InputForm';

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
