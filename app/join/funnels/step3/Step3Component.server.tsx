import FormSection from './components/FormSection.client';
import NoticeSection from './components/NoticeSection';
import SubmitSection from './components/SubmitSection.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.server';
import Step3ContextProvider from '@/components/common/Modal/Step3Context';

export default function Step3Component() {
  return (
    <main>
      <JoinTitleTextMessage>
        재학생 인증을 위해
        <br />
        학교 이메일을 입력해주세요
      </JoinTitleTextMessage>
      <Step3ContextProvider>
        <FormSection />
        <SubmitSection />
      </Step3ContextProvider>
      <NoticeSection />
    </main>
  );
}
