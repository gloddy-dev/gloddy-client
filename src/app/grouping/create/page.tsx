import CreateGroupContextProvider from './components/CreateGroupContext';
import TopNavigationBar from './components/CreateTopNavigationBar';
import GroupingPopup from './components/GroupingPopup.client';
import InputForm from './components/InputForm.client';

export default function CreateGroup() {
  return (
    <div className="mx-20">
      {/* <GroupingPopup /> */}
      <TopNavigationBar />
      <CreateGroupContextProvider>
        <InputForm />
      </CreateGroupContextProvider>
    </div>
  );
}
