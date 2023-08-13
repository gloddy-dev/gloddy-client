import CreateGroupContextProvider from './components/CreateGroupContext';
import Header from './components/CreateHeader';
import InputForm from './components/InputForm.client';

export default function CreateGroup() {
  return (
    <div className="mx-20">
      <Header />
      <CreateGroupContextProvider>
        <InputForm />
      </CreateGroupContextProvider>
    </div>
  );
}
