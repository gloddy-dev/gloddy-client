import JoinContextProvider from './components/JoinContext.client';
import JoinFunnel from './funnels/JoinFunnel';
import { ModalProvider } from '@/hooks/useModal';

export default async function JoinPage() {
  const { cookies } = await import('next/headers');
  const lng = cookies().get('i18next')?.value;

  return (
    <main className="h-full px-20">
      <JoinContextProvider>
        <ModalProvider>
          <JoinFunnel lng={lng} />
        </ModalProvider>
      </JoinContextProvider>
    </main>
  );
}
