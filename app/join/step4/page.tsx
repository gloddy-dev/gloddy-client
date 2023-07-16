import InputForm from './components/InputForm.client';
import JoinTopNavigationBar from '../components/JoinTopNavigationBar.server';

export default function Step4Page() {
  return (
    <div className="relative h-full">
      <JoinTopNavigationBar />

      <InputForm />
    </div>
  );
}
