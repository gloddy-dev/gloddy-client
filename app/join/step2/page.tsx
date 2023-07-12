import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';

import { AuthTitleTextMessage } from '../AuthTitleTextMessage';
import BottomModal from './BottomModal';
import InputForm from './InputForm';

export default function Step2Page() {
  return (
    <div className="relative h-full">
      <TopNavigationBar text="회원가입" />

      <AuthTitleTextMessage text={`재학중인 학교\n선택해주세요`} />

      <InputForm />

      <BottomModal />
    </div>
  );
}
