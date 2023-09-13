import JoinContextProvider from './components/JoinContext.client';
import JoinFunnel from './funnels/JoinFunnel';
import { ModalProvider } from '@/hooks/useModal';
import { useTranslation } from 'react-i18next';

export default async function JoinPage() {
  return (
    <main className="h-full px-20">
      <JoinContextProvider>
        <ModalProvider>
          <JoinFunnel />
        </ModalProvider>
      </JoinContextProvider>
    </main>
  );
}
