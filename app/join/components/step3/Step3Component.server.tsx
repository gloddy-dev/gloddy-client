import InputForm from './components/InputForm.client';
import NoticeSection from './components/NoticeSection';
import AuthTitleTextMessage from '../AuthTitleTextMessage.server';
import JoinTopNavigationBar from '../JoinTopNavigationBar.server';

export default function Step3Component() {
  return (
    <main>
      <AuthTitleTextMessage text={`재학생 인증을 위해\n학교 이메일을 입력해주세요`} />
      <InputForm />
      <NoticeSection />
    </main>
  );
}
