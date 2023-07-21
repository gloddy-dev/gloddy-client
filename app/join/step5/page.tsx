import InputForm from './components/InputForm.client';
import AuthTitleTextMessage from '../components/AuthTitleTextMessage.server';
import JoinTopNavigationBar from '../components/JoinTopNavigationBar.server';
import { Spacing } from '@/components/common/Spacing';

export default function Step5Page() {
  return (
    <>
      <JoinTopNavigationBar />
      <AuthTitleTextMessage text={`사용자님의 성격을\n선택해주세요!`} />
      <p className="text-14 text-gray2">3개를 선택해주세요.</p>
      <Spacing size={30} />
      <InputForm />
    </>
  );
}
