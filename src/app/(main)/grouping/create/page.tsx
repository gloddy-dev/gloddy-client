import CreateGroupContextProvider from './components/CreateGroupContext';
import CreateHeader from './components/CreateHeader';
import InputForm from './components/InputForm.client';

export default function CreateGroup() {
  return (
    <>
      <CreateHeader />
      <CreateGroupContextProvider>
        <InputForm />
      </CreateGroupContextProvider>
    </>
  );
}
