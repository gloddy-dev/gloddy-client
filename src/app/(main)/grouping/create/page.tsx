import CreateGroupContextProvider from './components/CreateGroupContext';
import InputForm from './components/InputForm.client';
import { Header } from '@/components/Header';

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
