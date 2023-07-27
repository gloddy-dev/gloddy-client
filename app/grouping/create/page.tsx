import CreateGroupContextProvider from './components/CreateGroupContext';
import TopNavigationBar from './components/CreateTopNavigationBar';
import InputForm from './components/InputForm.client';

export default function CreateGroup() {
  return (
    <div className="mx-20">
      <TopNavigationBar />
      <CreateGroupContextProvider>
        <InputForm />
      </CreateGroupContextProvider>
    </div>
  );
}
