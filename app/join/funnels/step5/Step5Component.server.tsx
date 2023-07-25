import InputForm from './components/InputForm.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.server';
import { Spacing } from '@/components/common/Spacing';

export default function Step5Component() {
  return (
    <main>
      <JoinTitleTextMessage text={`사용자님의 성격을\n선택해주세요!`} />
      <p className="text-14 text-gray2">3개를 선택해주세요.</p>
      <Spacing size={30} />
      <InputForm />
    </main>
  );
}
