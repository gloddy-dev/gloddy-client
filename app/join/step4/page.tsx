import JoinTopNavigationBar from '../components/JoinTopNavigationBar.server';
import InputForm from './components/InputForm.client';

export default function Step4Page() {
  return (
    <div className="relative h-full">
      <JoinTopNavigationBar />

      <InputForm />
    </div>
  );
}
