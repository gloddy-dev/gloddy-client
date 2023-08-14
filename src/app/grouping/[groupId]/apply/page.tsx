import ApplyHeader from './components/ApplyHeader';
import InputForm from './components/InputForm.client';
import { Spacing } from '@/components/common/Spacing';

export default function ApplyPage() {
  return (
    <main className="px-20">
      <ApplyHeader />
      <Spacing size={30} />
      <h1 className="font-700 text-24 leading-40">
        모임에 가입하기 위해
        <br />
        지원서를 작성해주세요
      </h1>
      <Spacing size={25} />
      <InputForm />
    </main>
  );
}
