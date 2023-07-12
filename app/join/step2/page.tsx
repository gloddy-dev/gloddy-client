import { AuthTitleTextMessage } from '../components/AuthTitleTextMessage.server';
import JoinTopNavigationBar from '../components/JoinTopNavigationBar.server';
import BottomModal from './components/BottomModal.client';
import InputForm from './components/InputForm.client';

export default function Step2Page() {
  return (
    <div className="relative h-full">
      <JoinTopNavigationBar />

      <AuthTitleTextMessage text={`재학중인 학교\n선택해주세요`} />

      <InputForm />

      <BottomModal />
    </div>
  );
}
