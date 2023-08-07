import BoardDetail from './components/BoardDetail.client';
import BoardTopNavigationBar from './components/BoardTopNavigationBar.client';
import WriteSection from './components/WriteSection.client';
import { RejectedFallback } from '@/components/common/ErrorBoundary';
import { Spacing } from '@/components/common/Spacing';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface BoardDetailPageProps {
  params: {
    groupId: string;
    boardId: string;
  };
}

export default function BoardDetailPage({ params }: BoardDetailPageProps) {
  const groupId = Number(params.groupId);
  const boardId = Number(params.boardId);

  return (
    <main className="bg-white">
      <BoardTopNavigationBar />
      <Spacing size={20} />
      <QueryAsyncBoundary rejectedFallback={RejectedFallback}>
        <BoardDetail groupId={groupId} boardId={boardId} />
      </QueryAsyncBoundary>
      <Spacing size={100} />
      <WriteSection groupId={groupId} boardId={boardId} />
    </main>
  );
}
