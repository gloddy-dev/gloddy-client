import CreateGroupContextProvider from './components/CreateGroupContext';
import GroupingModal from './components/GroupingModal.client';
import InputForm from './components/InputForm.client';
import { Header } from '@/components/Header';

export default function CreateGroup() {
  return (
    <div className="mx-20">
      {/* <GroupingModal /> */}
      <Header />
      <CreateGroupContextProvider>
        <InputForm />
      </CreateGroupContextProvider>
    </div>
  );
}
