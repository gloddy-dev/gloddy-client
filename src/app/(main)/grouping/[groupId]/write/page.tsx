import InputForm from './components/InputForm.client';
import WriteHeader from './components/WriteHeader.client';
import { Keys, getGroupDetail } from '@/apis/groups';
import { HydrationProvider } from '@/components/common/Provider';
import { Flex } from '@/components/Layout';
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
    <Flex direction="column" className="h-full">
      <WriteHeader />
      <Suspense fallback={null}>
        <PageAnimation>
          <HydrationProvider
            queryFn={() => getGroupDetail(groupId)}
            queryKey={Keys.getGroupDetail(groupId)}
          >
            <InputForm />
          </HydrationProvider>
        </PageAnimation>
      </Suspense>
    </Flex>
  );
}
