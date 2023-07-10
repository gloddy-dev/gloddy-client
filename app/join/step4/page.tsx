import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';

import InputForm from './InputForm';

export default function Step4Page() {
  return (
    <div className="relative h-full">
      <TopNavigationBar text="회원가입" />

      <InputForm />
    </div>
  );
}
