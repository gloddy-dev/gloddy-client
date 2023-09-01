import CreateGroupContextProvider from './components/CreateGroupContext';
import CreateGroupFunnel from './funnels/CreateGroupFunnel.client';
import { ModalProvider } from '@/hooks/useModal';

export default function CreateGroupPage() {
  return (
    <CreateGroupContextProvider>
      <ModalProvider>
        <CreateGroupFunnel />
      </ModalProvider>
    </CreateGroupContextProvider>
  );
}
