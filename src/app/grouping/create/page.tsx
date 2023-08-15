import CreateGroupContextProvider from './components/CreateGroupContext';
import GroupingPopup from './components/GroupingPopup.client';
import InputForm from './components/InputForm.client';
import { Header } from '@/components/Header';

export default function CreateGroup() {
  return (
    <div className="mx-20">
      {/* <GroupingPopup /> */}
      <Header />
      <CreateGroupContextProvider>
        <InputForm />
      </CreateGroupContextProvider>
    </div>
  );
}
