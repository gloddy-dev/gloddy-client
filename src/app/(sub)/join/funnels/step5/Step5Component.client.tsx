'use client';

import InputForm from './components/InputForm.client';
import JoinContentTextMessage from '../../components/JoinContentTextMessage.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.client';
import { Spacing } from '@/components/common/Spacing';

export default function Step5Component() {
  return (
    <main>
      <JoinTitleTextMessage>
        사용자님의 성격을
        <br />
        선택해주세요!
      </JoinTitleTextMessage>
      <JoinContentTextMessage>3개 이상 선택해주세요.</JoinContentTextMessage>
      <Spacing size={16} />
      <InputForm />
    </main>
  );
}
