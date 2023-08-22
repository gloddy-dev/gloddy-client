'use client';

import CertificationForm from './components/CertificationForm.client';
import EmailForm from './components/EmailForm.client';
import NoticeSection from './components/NoticeSection.client';
import TimerContext from './components/TimerContext.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.client';

export default function Step3Component() {
  return (
    <main>
      <JoinTitleTextMessage>
        재학생 인증을 위해
        <br />
        학교 이메일을 입력해주세요
      </JoinTitleTextMessage>

      <TimerContext>
        <EmailForm />
        <CertificationForm />
      </TimerContext>

      <NoticeSection />
    </main>
  );
}
