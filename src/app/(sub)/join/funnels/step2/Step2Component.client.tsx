'use client';

import AgreeSection from './components/AgreeForm.client';
import InputForm from './components/InputForm.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.client';

export default function Step2Component() {
  return (
    <main>
      <JoinTitleTextMessage>
        재학중인 학교
        <br />
        선택해주세요
      </JoinTitleTextMessage>
      <InputForm />
      <AgreeSection />
    </main>
  );
}
