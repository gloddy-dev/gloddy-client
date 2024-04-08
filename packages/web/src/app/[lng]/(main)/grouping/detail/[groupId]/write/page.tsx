import { ErrorBoundary } from 'react-error-boundary';

import InputForm from './components/InputForm';
import WriteHeader from './components/WriteHeader';

import { Keys, getGroupDetail } from '@/apis/groups';
import { ErrorFallback } from '@/components/ErrorBoundary';
import { HydrationProvider } from '@/components/Provider';

interface WritePageProps {
  params: {
    groupId: string;
  };
}

export default async function WritePage({ params }: WritePageProps) {
  const groupId = Number(params.groupId);

  return (
    <div className="flex h-full flex-col">
      <WriteHeader />
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <HydrationProvider
          queryFn={() => getGroupDetail(groupId)}
          queryKey={Keys.getGroupDetail(groupId)}
        >
          <InputForm />
        </HydrationProvider>
      </ErrorBoundary>
    </div>
  );
}
