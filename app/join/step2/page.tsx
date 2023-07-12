import { AuthTitleTextMessage } from '../components/AuthTitleTextMessage';
import JoinTopNavigationBar from '../components/JoinTopNavigationBar';
import BottomModal from './components/BottomModal';
import InputForm from './components/InputForm';

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
