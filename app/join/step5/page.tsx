import Spacing from '@/components/common/Spacing';

import { AuthTitleTextMessage } from '../components/AuthTitleTextMessage.server';
import JoinTopNavigationBar from '../components/JoinTopNavigationBar.server';
import InputForm from './components/InputForm.client';

export default function Step5Page() {
  return (
    <div className="relative h-full ">
      <JoinTopNavigationBar />

      <AuthTitleTextMessage text={`사용자님의 성격을\n선택해주세요!`} />

      <p className="text-14 text-gray2">3개를 선택해주세요.</p>

      <Spacing size={30} />

      <InputForm />
    </div>
  );
}
