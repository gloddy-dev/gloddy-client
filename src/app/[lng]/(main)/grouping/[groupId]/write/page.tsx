import InputForm from './components/InputForm.client';
import WriteHeader from './components/WriteHeader.client';
import { Keys, getGroupDetail } from '@/apis/groups';
import LocalErrorSuspenseBoundary from '@/components/ErrorBoundary/LocalErrorSuspenseBoundary';
import { HydrationProvider } from '@/components/Provider';

interface WritePageProps {
  params: {
    groupId: string;
  };
}

export default function WritePage({ params }: WritePageProps) {
  const groupId = Number(params.groupId);

  return (
    <div className="flex h-full flex-col">
      <WriteHeader />
      <LocalErrorSuspenseBoundary>
        <HydrationProvider
          queryFn={() => getGroupDetail(groupId)}
          queryKey={Keys.getGroupDetail(groupId)}
        >
          <InputForm />
        </HydrationProvider>
      </LocalErrorSuspenseBoundary>
    </div>
  );
}
