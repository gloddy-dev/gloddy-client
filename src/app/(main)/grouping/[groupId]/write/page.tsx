import InputForm from './components/InputForm.client';
import WriteHeader from './components/WriteHeader.client';
import { Keys, getGroupDetail } from '@/apis/groups';
import { RejectedFallback } from '@/components/ErrorBoundary';
import { PageAnimation } from '@/components/PageAnimation';
import { HydrationProvider } from '@/components/Provider';
import { QueryAsyncBoundary } from '@suspensive/react-query';
import { Loading } from 'antd-mobile';

interface WritePageProps {
  params: {
    groupId: string;
  };
}

export default function WritePage({ params }: WritePageProps) {
  const groupId = Number(params.groupId);

  return (
    <PageAnimation className="flex h-full flex-col">
      <WriteHeader />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback} pendingFallback={<Loading />}>
        <HydrationProvider
          queryFn={() => getGroupDetail(groupId)}
          queryKey={Keys.getGroupDetail(groupId)}
        >
          <InputForm />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </PageAnimation>
  );
}
