import { ErrorBoundary } from 'react-error-boundary';

import CreateGroupContextProvider from './components/CreateGroupContext';
import CreateGroupFunnel from './funnels/CreateGroupFunnel';

import { ErrorFallback } from '@/components/ErrorBoundary';

export default function CreateGroupPage() {
  return (
    <CreateGroupContextProvider>
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <CreateGroupFunnel />
      </ErrorBoundary>
    </CreateGroupContextProvider>
  );
}
