import CreateGroupContextProvider from './components/CreateGroupContext';
import CreateGroupFunnel from './funnels/CreateGroupFunnel.client';

export default function CreateGroupPage() {
  return (
    <CreateGroupContextProvider>
      <CreateGroupFunnel />
    </CreateGroupContextProvider>
  );
}
