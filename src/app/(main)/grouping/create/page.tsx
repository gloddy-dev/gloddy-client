import CreateGroupContextProvider from './components/CreateGroupContext';
import CreateGroupFunnel from './funnels/CreateGroupFunnel.client';
import { ModalProvider } from '@/hooks/useModal';

export default function CreateGroupPage() {
  return (
    <ModalProvider>
      <CreateGroupContextProvider>
        <CreateGroupFunnel />
      </CreateGroupContextProvider>
    </ModalProvider>
  );
}
