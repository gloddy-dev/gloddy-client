import BottomModal from './components/BottomModal.client';
import FormSection from './components/FormSection.client';
import AuthTitleTextMessage from '../JoinTitleTextMessage.server';

export default function Step2Component() {
  return (
    <main>
      <AuthTitleTextMessage text={`재학중인 학교\n선택해주세요`} />
      <FormSection />
      <BottomModal />
    </main>
  );
}
