import BottomModal from './components/BottomModal.client';
import InputForm from './components/InputForm.client';
import AuthTitleTextMessage from '../AuthTitleTextMessage.server';
import JoinTopNavigationBar from '../JoinTopNavigationBar.server';

export default function Step2Component() {
  return (
    <main>
      <JoinTopNavigationBar />
      <AuthTitleTextMessage text={`재학중인 학교\n선택해주세요`} />
      <InputForm />
      <BottomModal />
    </main>
  );
}
