'use client';

import FormSection from './components/FormSection.client';
import NoticeSection from './components/NoticeSection.client';
import TimerContext from './components/TimerContext.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.client';
import ModalContextProvider from '@/components/Modal/ModalContext.client';

export default function Step3Component() {
  return (
    <main>
      <JoinTitleTextMessage>
        재학생 인증을 위해
        <br />
        학교 이메일을 입력해주세요
      </JoinTitleTextMessage>

      <ModalContextProvider>
        <TimerContext>
          <FormSection />
        </TimerContext>
      </ModalContextProvider>

      <NoticeSection />
    </main>
  );
}
