import BottomModal from './components/BottomModal.client';
import FormSection from './components/FormSection.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.server';

export default function Step2Component() {
  return (
    <main>
      <JoinTitleTextMessage>
        재학중인 학교
        <br />
        선택해주세요
      </JoinTitleTextMessage>
      <FormSection />
      <BottomModal />
    </main>
  );
}
