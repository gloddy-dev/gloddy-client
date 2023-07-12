import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import Spacing from '@/components/common/Spacing';

import { AuthTitleTextMessage } from '../AuthTitleTextMessage';
import InputForm from './InputForm';

export default function Step5Page() {
  return (
    <div className="relative h-full ">
      <TopNavigationBar text="회원가입" />

      <AuthTitleTextMessage text={`사용자님의 성격을\n선택해주세요!`} />

      <p className="text-14 text-gray2">3개를 선택해주세요.</p>

      <Spacing size={30} />

      <InputForm />
    </div>
  );
}
