import { Suspense } from 'react';

import JoinContextProvider from './components/JoinContext';
import JoinFunnel from './funnels/JoinFunnel';

import { Loading } from '@/components/Loading';
import ModalProvider from '@/hooks/useModal/ModalProvider';

export default async function JoinPage() {
  return (
    <main className="h-full px-20">
      <JoinContextProvider>
        <ModalProvider>
          <Suspense fallback={<Loading />}>
            <JoinFunnel />
          </Suspense>
        </ModalProvider>
      </JoinContextProvider>
    </main>
  );
}
