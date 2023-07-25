import FormSection from './components/FormSection.client';
import NoticeSection from './components/NoticeSection';
import AuthTitleTextMessage from '../JoinTitleTextMessage.server';

export default function Step3Component() {
  return (
    <main>
      <AuthTitleTextMessage text={`재학생 인증을 위해\n학교 이메일을 입력해주세요`} />
      <FormSection />
      <NoticeSection />
    </main>
  );
}
