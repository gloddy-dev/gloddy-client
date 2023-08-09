import ApplyTopNavigationBar from './components/ApplyTopNavigationBar';
import InputForm from './components/InputForm.client';
import { Spacing } from '@/components/common/Spacing';

export default function ApplyPage() {
  return (
    <main className="px-20">
      <ApplyTopNavigationBar />
      <Spacing size={30} />
      <h1 className="text-24 font-700 leading-40">
        모임에 가입하기 위해
        <br />
        지원서를 작성해주세요
      </h1>
      <Spacing size={25} />
      <InputForm />
    </main>
  );
}
