import CreateGroupContextProvider from './components/CreateGroupContext';
import CreateHeader from './components/CreateHeader';
import InputForm from './components/InputForm.client';
import { ModalProvider } from '@/hooks/useModal';

export default function CreateGroup() {
  return (
    <>
      <CreateHeader />
      <CreateGroupContextProvider>
        <ModalProvider>
          <InputForm />
        </ModalProvider>
      </CreateGroupContextProvider>
    </>
  );
}
