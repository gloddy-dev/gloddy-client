import { Suspense } from 'react';

import CreateGroupContextProvider from './components/CreateGroupContext';
import CreateGroupFunnel from './funnels/CreateGroupFunnel.client';

export default function CreateGroupPage() {
  return (
    <CreateGroupContextProvider>
      <Suspense>
        <CreateGroupFunnel />
      </Suspense>
    </CreateGroupContextProvider>
  );
}
