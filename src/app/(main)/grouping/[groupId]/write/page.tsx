import InputForm from './components/InputForm.client';
import WriteHeader from './components/WriteHeader.client';
import { Keys, getGroupDetail } from '@/apis/groups';
import { HydrationProvider } from '@/components/Provider';
import { PageAnimation } from '@/components/PageAnimation';
import { Suspense } from 'react';

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
      <Suspense fallback={null}>
        <HydrationProvider
          queryFn={() => getGroupDetail(groupId)}
          queryKey={Keys.getGroupDetail(groupId)}
        >
          <InputForm />
        </HydrationProvider>
      </Suspense>
    </PageAnimation>
  );
}
