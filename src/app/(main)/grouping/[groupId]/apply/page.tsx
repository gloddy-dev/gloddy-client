import ApplyHeader from './components/ApplyHeader';
import InputForm from './components/InputForm.client';
import { Spacing } from '@/components/common/Spacing';
import { PageAnimation } from '@/components/PageAnimation';

export default function ApplyPage() {
  return (
    <main className="px-20">
      <ApplyHeader />
      <PageAnimation>
        <Spacing size={32} />
        <h4 className="text-h4 text-sign-cto">
          모임에 가입하기 위해
          <br />
          지원서를 작성해주세요
        </h4>
        <Spacing size={36} />
        <InputForm />
      </PageAnimation>
    </main>
  );
}
