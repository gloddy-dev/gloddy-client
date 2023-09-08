import EmailForm from './components/EmailForm.client';
import NoticeSection from './components/NoticeSection.client';
import TitleTextMessage from './components/TitleTextMessage';

export default function Step3Component() {
  return (
    <main className="px-20">
      <TitleTextMessage>
        재학생 인증을 위해
        <br />
        학교 이메일을 입력해주세요
      </TitleTextMessage>

      <EmailForm />

      <NoticeSection />
    </main>
  );
}
