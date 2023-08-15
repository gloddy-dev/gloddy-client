import FormSection from './components/FormSection.client';
import NoticeSection from './components/NoticeSection.server';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.server';
import { Spacing } from '@/components/common/Spacing';

export default function Step1Component() {
  return (
    <main>
      <JoinTitleTextMessage>
        휴대폰 번호를
        <br />
        인증해주세요
      </JoinTitleTextMessage>
      <FormSection />
      <Spacing size={16} />
      <NoticeSection />
    </main>
  );
}
