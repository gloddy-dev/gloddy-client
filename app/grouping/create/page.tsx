import InputForm from './components/InputForm.client';
import TopNavigationBar from './components/TopNavigationBar.client';

export default function CreateMeeting() {
  return (
    <div className="mx-20">
      <TopNavigationBar />
      <InputForm />
    </div>
  );
}
