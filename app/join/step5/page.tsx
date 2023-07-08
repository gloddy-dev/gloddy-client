import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import { AuthTitleTextMessage } from '@/components/TextMessage/AuthTextMessage';

import InputForm from './InputForm';

export default function Step5Page() {
  return (
    <div className="relative h-full ">
      <TopNavigationBar text="회원가입" />

      <section>
        <AuthTitleTextMessage text={`사용자님의 성격을\n선택해주세요!`} />
      </section>

      <p className="text-14 text-gray2">3개를 선택해주세요.</p>

      <InputForm />

      <div className="h-30" />
    </div>
  );
}
