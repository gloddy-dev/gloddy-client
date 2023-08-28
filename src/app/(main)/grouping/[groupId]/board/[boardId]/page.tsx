import BoardDetail from './components/BoardDetail.client';
import BoardHeader from './components/BoardHeader';
import WriteSection from './components/WriteSection.client';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { Spacing } from '@/components/common/Spacing';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface BoardDetailPageProps {
  params: {
    groupId: string;
  };
}

export default function BoardDetailPage({ params }: BoardDetailPageProps) {
  const groupId = Number(params.groupId);

  return (
    <>
      <BoardHeader groupId={groupId} />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback}>
        <BoardDetail />
      </QueryAsyncBoundary>
      <Spacing size={100} />
      <WriteSection />
    </>
  );
}
