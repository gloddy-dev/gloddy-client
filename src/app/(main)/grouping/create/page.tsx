import CreateGroupContextProvider from './components/CreateGroupContext';
import CreateFunnel from './funnels/CreateFunnel.client';
import { ModalProvider } from '@/hooks/useModal';

export default function CreateGroupPage() {
  return (
    <CreateGroupContextProvider>
      <ModalProvider>
        <CreateFunnel />
      </ModalProvider>
    </CreateGroupContextProvider>
  );
}
